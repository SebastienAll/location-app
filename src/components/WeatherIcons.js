import React, { Fragment } from 'react'
import '../App.css';

export default function WeatherIcons({ weather }) {

    const weatherIcon = () => {

        if ( weather === 'Clouds' ) {
            return <i className="fas fa-cloud fa-6x"></i>;
        } else if ( weather === 'Rain' ) {
            return <i className="fas fa-cloud-rain fa-6x"></i>;
        } else if ( weather === 'Thunderstorm' ) {
            return <i className="fas fa-poo-storm fa-6x"></i>
        } else if ( weather === 'Drizzle' ) {
            return <i className="fas fa-cloud-showers-heavy fa-6x"></i>
        } else if ( weather === 'Snow' ) {
            return <i className="fas fa-snowflake fa-6x"></i>
        } else if ( weather === 'Clear' ) {
            return <i className="fas fa-sun fa-6x"></i>
        } else if ( weather === 'Mist' ||  weather === 'Smoke' ||  weather === 'Haze' ||  weather === 'Dust' ||  weather === 'Fog' ||  weather === 'Ash' ||  weather === 'Squall' ||  weather === 'Tornado' ) {
            return <i className="fas fa-smog fa-6x"></i>
        }

    }

    return (


        <Fragment>
            {weatherIcon()}
        </Fragment>
        



    )



}
