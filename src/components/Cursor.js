import React from 'react'
import '../App.css';



export default function Cursor() {

    window.addEventListener('load', () => {

    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute('style', 'top: ' + (e.pageY - 10) + "px; left : " + (e.pageX - 10) + "px;")
    })

    document.addEventListener('click', () => {
        cursor.classList.add('expand');

        setTimeout(() => {
            cursor.classList.remove('expand');
        }, 500);
    })

    document.addEventListener('pointer', () => {
        cursor.classList.add('expandhover');

    })

    })

    return (

        <div className="cursor">
            
        </div>
    
    )
}
