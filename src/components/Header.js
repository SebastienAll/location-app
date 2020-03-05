import React from 'react';
import '../App.css';
import { Fragment } from 'react';
import { TweenMax , TimelineMax, Power3 } from 'gsap';
import Background from '../images/Background1.jpg'


const Header = ({ weather }) => {

    /* ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
    /* ----------------------------------● ANIMATION HEADER
    /* ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ */
    
    window.onload = function () {

        let tl = new TimelineMax();

        tl
            .from('.item1', 2, {autoAlpha:1 , x:-1000 , ease: Power3.easeOut})
            .from('.item2', 2, {autoAlpha:0 , x: +200, ease: Power3.easeOut}, '-=1.00')
            .from('.item3', 2, {autoAlpha:0 , y: +400, ease: Power3.easeOut}, '-=1.00')
            .from('.maintitle', 2, {autoAlpha:0 , y: -20, ease: Power3.easeOut}, '-=1.00')
            
            

    }

    
    
    /* ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
    /* ----------------------------------● RETURN FUNCTION
    /* ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ */

    return (

        <Fragment>
            <header>
                <img src={Background} alt="Ville de Toulouse"/>
                <h1 className="maintitle">You're now <br/>a <br/>Pink Biker</h1>
                <div className="blocparagraphe">
                </div>
                <div className="iconHome" ><i className="fas fa-chevron-down iHome"></i></div>
                <div className="item1">
                <p><img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="Icone de Météo"/></p>
                </div>
                <div className="item2"></div>
                <div className="item3"></div>
                <svg id="shape1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f8bbd0" d="M0,160L34.3,144C68.6,128,137,96,206,112C274.3,128,343,192,411,202.7C480,213,549,171,617,165.3C685.7,160,754,192,823,186.7C891.4,181,960,139,1029,106.7C1097.1,75,1166,53,1234,42.7C1302.9,32,1371,32,1406,32L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            </header>
        </Fragment>

    )

}

export default Header;
