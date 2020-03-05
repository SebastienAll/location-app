import React, { Fragment, useState, useEffect } from 'react';
import '../App.css';
import Signature from './Signature';


export default function Formulaire ({ name , address , status , bikes }) {

    /* ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
    /* ----------------------------------● USERS
    /* ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ */
    
    // Hooks concernant le prénom et le nom
    const [surname, setSurname] = useState('');
    const [lastname, setLastname] = useState('');

    // Récupération du prénom via l'utilisateur
    const handleSurname = (event) => {
        let input = event.currentTarget.value
        setSurname(input)
    }

    // Récupération du nom via l'utilisateur
    const handleLastname = event => {
        let input = event.currentTarget.value
        setLastname(input)
    }

    /* ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
    /* ----------------------------------● RESERVATION
    /* ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ */

    // Etat de l'autorisation de réservation 
    let signForm = false;

    // Fonction au click du bouton de réservation
    const clickButtonForm = () => {

        if ( name !=null && bikes > 0 && status === "OPEN" ) {
            
            signForm = !signForm;
            localStorage.setItem("surname", surname);       // PROVISOIRE
            localStorage.setItem("lastname", lastname);     // PROVISOIRE
            setSurname('');
            setLastname('');
            setIsActive(!isActive);                         // PROVISOIRE
            addCanvas();

        } else {

            signForm = false;

        }

        console.log(signForm)

    }

    const addCanvas = () => {

        return (

            <Signature />

        )

    }

    /* ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
    /* ----------------------------------● TIMER
    /* ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ */

    const [minutes, setMinutes] = useState(1);         // Hook contenant les minutes
    const [seconds, setSeconds] = useState(0);          // Hook contenant les secondes
    const [isActive, setIsActive] = useState(false);    // Hook contenant l'état d'activation du compteur
    
    useEffect( () => {

        let interval = null;

        if (isActive) {

        if (seconds > 0) {
            interval = setInterval( () => setSeconds(seconds - 1), 1000);
            return () => clearInterval(interval)
        } 

        if (minutes === 0) {
            return () => clearInterval(interval);
        } else {
            interval = setInterval( () => {
                setMinutes(minutes - 1);
                setSeconds(59);
            }, 1000);
            return () => clearInterval(interval)
        }}

    }, [seconds, minutes, isActive]); // Modification seulement si changement sur un de ces arguments


    const [canvas, setCanvas] = useState('canvas-hidden');

    const handleCanvasVisible = () => {

        setCanvas('canvas')

    }

    console.log(canvas)

    /* ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
    /* ----------------------------------● RETURN FUNCTION
    /* ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ */
    
    return (

        <Fragment>
            <div className="form container-fluid">
                <div>
                    <h1>Stations : </h1>
                    <p>{name}</p>
                </div>
                <div>
                    <h1>Adresse : </h1>
                    <p>{address}</p>
                </div>
                <div>
                    <h1>Vélos : </h1>
                    <p>{bikes}</p>
                </div>
                <div>
                    <h1>Status : </h1>
                    <p>{status}</p>
                </div>
                <div>
                    <h2>{surname}</h2>
                    <h2>{lastname}</h2>
                </div>
                
                <p className="timer">
                    {minutes < 10 ? '0' + minutes : minutes} : {seconds < 10 ? '0' + seconds : seconds}</p>
                <p className="timer"></p>
                <input type='text' placeholder='Prénom' value={surname} onChange={handleSurname} />
                <input type='text'placeholder='Nom' value={lastname} onChange={handleLastname} />
                <button onClick={clickButtonForm}>Réserver</button>
                <button onClick={handleCanvasVisible}>Afficher Canvas</button>
                <Signature canvas={canvas} />
            </div>
        </Fragment>

    )
}
