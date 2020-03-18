import React, { Fragment, useState, useEffect } from 'react';
import '../App.css';
import Signature from './Signature';
import {Modal} from 'react-bootstrap';
import moment from 'moment';
import 'moment-timezone';

export default function Formulaire ({ name , address , status , bikes }) {

    // Action au chargement de la page
    window.addEventListener('load', () => {
        handleCheckReservation();
    })

    // Action à la fermeture de la page
    window.addEventListener('beforeunload', () => {
        const timeUnload = moment();
        sessionStorage.setItem('logout', timeUnload);
        sessionStorage.setItem('minutes', minutes);
        sessionStorage.setItem('secondes', seconds);
    })

/* ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
/* ----------------------------------● TODO USERS
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
/* ----------------------------------● TODO RESERVATION
/* ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ */

    // Etat du popup 
    const [show, setShow] = useState(false);
    const [reserve, setReserve] = useState(false);

    // Fonction au click du bouton de réservation
    const clickButtonForm = (e) => {
        e.preventDefault();
        if ( name !=null && bikes > 0 && status === "OPEN" && surname !== '' && lastname !== '') {
            setShow(true)
        } else {
            setShow(false)
        }

    }

    const handleCheckReservation = () => {

        // Stock la date et l'heure au chargement de la page
        let timeLogin = moment();

        // Récupère l'heure et la date de la déconnextion
        let  timeLogout = sessionStorage.getItem('logout');

        // Calcule la différence pour savoir le temps que l'utilisateur à passer hors de la page
        let duration = moment.duration(timeLogin.diff(timeLogout));

        //Vérifie si la réservatione est stockée dans le web storage
        if (sessionStorage.getItem('reservation')) { 
            // Réinjecte les minutes et les seconds - le temps de déconnexion
            setMinutes(sessionStorage.getItem('minutes') - duration._data.minutes);
            setSeconds(sessionStorage.getItem('secondes') - duration._data.minutes);
            setReserve(true);
            setIsActive(true);
            document.querySelector('.inputsurname').setAttribute('disabled', ''); // Désactive input surname
            document.querySelector('.inputlastname').setAttribute('disabled', ''); // Désactive input lastname
            document.querySelector('.btnReserve').style.display = "none"; // Désactive le bouton de réservation
        }

    }

    // Fonction au clique du bouton "Validez" dans le popup canvas
    const handleValidAfterSign = (e) => {
        e.preventDefault();
        localStorage.setItem("surname", surname); // Sauvegarde le prénom dans localStorage
        localStorage.setItem("lastname", lastname); // Sauvegarde le nom dans localStorage
        sessionStorage.setItem('address', address); // Sauvegarde l'adresse en cours dans sessionStorage
        document.querySelector('.inputsurname').setAttribute('disabled', '');
        document.querySelector('.inputlastname').setAttribute('disabled', '');
        setReserve(true); // Active la réservation
        setIsActive(!isActive);     // Déclenche le Timer
        setShow(false); // Ferme le Modal
        document.querySelector('.btnReserve').style.display = "none"; // Désactive le bouton de réservation
        let timeValidation = moment().add(20, 'm').toDate();
        sessionStorage.setItem('endReservation', timeValidation);
    }

    if (reserve === true) {
        sessionStorage.setItem('reservation', reserve); // Sauvegarde l'état de la reservation
    } 

    // Fonction d'annulation de la réservation
    const handleCancelReservation = (e) => {
        e.preventDefault();
        sessionStorage.clear();
        document.querySelector('.btnReserve').style.display = "block";
        document.querySelector('.inputsurname').removeAttribute('disabled', '');
        document.querySelector('.inputlastname').removeAttribute('disabled', '');
        setIsActive(false);
        setReserve(false);
        setSurname('');
        setLastname('');
    }

    // Fonction d'expiration de la réservation
    const handleExpireReservation = () => {
        sessionStorage.clear();
        document.querySelector('.btnReserve').style.display = "block";
        document.querySelector('.inputsurname').removeAttribute('disabled', '');
        document.querySelector('.inputlastname').removeAttribute('disabled', '');
        setIsActive(false);
        setReserve(false);
        setSurname('');
        setLastname('');
    }

/* ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
/* ----------------------------------● TODO TIMER
/* ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ */

    const [minutes, setMinutes] = useState(20);         // Hook contenant les minutes
    const [seconds, setSeconds] = useState(0);          // Hook contenant les secondes
    const [isActive, setIsActive] = useState(false);    // Hook contenant l'état d'activation du compteur

    useEffect( () => {

        let myInterval = null;
    
        if (isActive) {
    
          if (seconds > 0) {
            myInterval = setInterval( () => setSeconds(seconds - 1), 1000);
            return () => clearInterval(myInterval);
          }
    
          if (seconds === 0 && minutes >= 0) {
            myInterval = setInterval( () => {
              setMinutes(minutes - 1);
              setSeconds(59);
            }, 1000);
            return () => (clearInterval(myInterval))
          } else {
            handleExpireReservation();
          }
    
        }
    
      }, [seconds, minutes, isActive])

/* ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
/* ----------------------------------● TODO RETURN FUNCTION
/* ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ */
    
    return (

        <Fragment>
            <div className="form">
                <div>
                    <h1>Stations</h1>
                    <p className='info'>{name}</p>
                </div>
                <div>
                    <h1>Adresse</h1>
                    <p className='info'>{address}</p>
                </div>
                <div>
                    <h1>Vélos</h1>
                    <p className='info'>{bikes}</p>
                </div>
                <div>
                    <h1>Status</h1>
                    <p className='info'>{

                        status === 'OPEN' ? 'OUVERTE' : null ||
                        status === 'CLOSE' ? 'FERMEE' : null

                    }</p>
                </div>
                <hr/>
                <div className='infoUser'>
                <h1>Utilisateur</h1>
                    <input required="required" className='inputsurname' type='text' placeholder='Prénom' value={surname} onChange={handleSurname} />
                    <input required="required" className='inputlastname'type='text'placeholder='Nom' value={lastname} onChange={handleLastname} />
                </div>
                    <a href='false' className='btnReserve' onClick={clickButtonForm}>Réserver</a>
                    {
                    reserve ? 
                    <Fragment>
                    <div className='viewReserve' >
                    <p>{` Votre réservation au nom de ${localStorage.getItem('lastname')} ${localStorage.getItem('surname')} à l'adresse ${sessionStorage.getItem('address')} à bien été prise en compte. `}</p>
                    <p className="viewTimer">{` Durée restante : ${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds} `}</p>
                    <a href='false' className="btnCancelReserve" onClick={handleCancelReservation}>Annuler</a>
                    </div>
                    </Fragment>
                    : <span></span>
                }

                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                    className="modal"
                >
                    <Modal.Header closeButton className='modal-header'>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Réservation
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='modal-body'>
                        <Signature state={show} handleValid={handleValidAfterSign} />
                        <a href='false' className='btnValidReserve' onClick={handleValidAfterSign}>Validez</a>
                    </Modal.Body>
                </Modal>

            </div>
        </Fragment>

    )
}
