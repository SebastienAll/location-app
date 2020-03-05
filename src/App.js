import React, { Component, Fragment } from "react";
import MapStations from './components/Map';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
// import Cursor from './components/Cursor';
import './App.css';


// Déclaration des constantes nécessaires pour la requête

const city = 'Toulouse';

const apiKey = 'b309f0297a68f865e2f8824658204cf9ce7ffaca';

const URL = (`https://api.jcdecaux.com/vls/v1/stations?contract=${city}&apiKey=${apiKey}`);

const weatherCity = 'Toulouse';

const weatherApiKey = '69b92398024593946ae629c9ade5fa67';

const weatherURL = (`http://api.openweathermap.org/data/2.5/weather?q=${weatherCity}&appid=${weatherApiKey}&lang=fr=units=metric`);

// Déclaration de la classe principale
class App extends Component {

        state = {

            stations : [],
            weatherInfo : [],

        }


    // Fonction pour faire la requête JCDecaux
    apiRequest = () => {

        fetch(URL)
        .then(res => res.json())
        .then(
            
            // Spread Operator pour récuperer toutes les données de data
            (data) => this.setState({ stations : [...data] })

        )
        .catch(error => console.error(error))

    }

    apiRequestWeather = () => {

        fetch(weatherURL)
        .then(res => res.json())
        .then(

            json => this.setState({ weatherInfo : {
                weather : json.weather[0].main,
                icon : json.weather[0].icon,
                temp : json.main.temp,
            }})

        )
        .catch(error => console.error(error))

    }

     

    // Quand le composant est chargé, execution de la fonction traitant la requête Ajax
    componentDidMount() {

        this.apiRequest()
        this.apiRequestWeather()
        console.log(this.state.weatherInfo)
    }



    render() {     
        
        const {stations, weatherInfo} = this.state;

        return (
            <Fragment>


                <div id="headerpart">
                    <Header weather={weatherInfo} />
                </div>

                <section className="sliderpart">
                    <Slider />
                </section>

                <div className="mappart">
                    <MapStations 
                        stations={stations} />
                </div>

                <div className="footerpart">
                    <Footer/>
                </div>

                

            </Fragment>
        )

    }

}


export default App;