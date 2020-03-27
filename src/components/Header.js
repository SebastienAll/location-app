import React from 'react';
import '../App.css';
import { Fragment } from 'react';
import { TimelineMax, Power3, Power4 } from 'gsap';
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import WeatherIcons from './WeatherIcons';

gsap.registerPlugin(ScrollToPlugin); 

const Header = ({ weather }) => {

    /* ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
    /* ----------------------------------● TODO ANIMATION HEADER
    /* ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ */
    
    window.onload = function () {

        let tl = new TimelineMax();

        tl
            .from('.maintitle', 1.5, {autoAlpha:0 , opacity : 0, y: -20, ease: Power3.easeOut, delay : 3}, '-=1.00')
            .from('.lead', 1.5, {autoAlpha:0 , y: -10, ease: Power3.easeOut}, '-=1.00')
            .from('.item1', 1.5, {autoAlpha:0 , y : -20 , ease: Power3.easeOut}, '-=1.00')
            .from('.item2', 1.5, {autoAlpha:0 , y : -20 , ease: Power3.easeOut}, '-=1.00')
    }

    const btnSlide = () => {
        gsap.to(window, {duration: 2, scrollTo : {y : '.sliderpart', offsetY : 0}, ease : Power4.easeOut});
    }       
    
    /* ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
    /* ----------------------------------● TODO RETURN FUNCTION
    /* ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ */

    return (

        <Fragment>
            <header className='hero1 jumbotron jumbotron-fluid'>
                <h1 className="display-4 maintitle">PinkBike</h1>
                <p className='lead'>Bienvenue sur le site de location de vélos de la ville de Toulouse</p>

                    <div className="item item1">
                        <p><WeatherIcons weather={weather.weather} /></p>
                    </div>
                    <div className="item item2"><p>{parseInt(weather.temp) + '°C'}</p></div>

                    <i id='btnScroll' className="iconSlide fas fa-chevron-down iHome" onClick={btnSlide}></i>

            </header>
        </Fragment>

    )

}

export default Header;
