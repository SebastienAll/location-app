
import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';
import image1 from '../images/01.png';
import image2 from '../images/02.png';
import image3 from '../images/03.png';
import image4 from '../images/04.png';
import image5 from '../images/05.png';
import image6 from '../images/06.png';

export default class Slider extends Component {

    componentDidMount = () => {

        $(document).ready(() => {

            var imgItems = $('.slider li').length;      // Nombres d'images dans le slide
            var imgPos = 1;
            
            for (var i = 1 ; i <= imgItems ; i++) {     // Rajout automatique de curseur selon le nombre d'image
                $('.pagination').append('<li><span fill="#f5f5f5" class="iconPag fas fa-bicycle fa-2x"></span></li>');
            }

            $('.slider li').hide();                                         // Cache toutes les images dans le slider
            $('.slider li:first').show();                                   // Affiche la première image du slider
            $('.pagination li:first').css({'color' : '#ef9a9a'});           // Met la couleur indiqué sur le premier curseur
            $('.pagination li').click(pagination);

            // Evenment au clique pour changer d'image
            $('.right span').click(nextSlider);
            // Evenment au clavier pour changer d'image
            $(document).keydown(function (e) { 
                if (e.which === 39) {
                    e.preventDefault();
                    nextSlider();
                }
            });

            // Evenment au clique pour changer d'image
            $('.left span').click(prevSlider);
            // Evenment au clavier pour changer d'image
            $(document).keydown(function (e) { 
                if (e.which === 37) {
                    e.preventDefault();
                    prevSlider();
                }
            });

            // Interval pour le slide automatique toutes les 5 secondes

            var intervalSlider = null;

            setTimeout(() => {
                startSlider();
            }, 6000);

            $('.play').click(startSlider);
            $('.pause').click(stopSlider);

            // Fonction pour arreter l'interval
            function stopSlider () {
                clearInterval(intervalSlider);
            }

            // Fonction pour démarrer l'interval
            function startSlider () {
                intervalSlider = setInterval( () => {
                    nextSlider();
                }, 5000);
            }

            // Fonction concernant la pagination
            function pagination () {

                // Récupère la position de l'image via l'index et ajoute 1 (Pour éviter de partir de 0)
                var paginationPos = $(this).index() + 1;

                // Cache toutes les images
                $('.slider li').hide();                                         
                // Affiche l'image en rapport avec l'index avec un effet de transition
                $('.slider li:nth-child(' + paginationPos + ')').fadeIn();      
                
                $('.pagination li').css({'color' : '#272727'}); 
                $(this).css({'color' : '#ef9a9a'});

                imgPos = paginationPos;

            }

            // Fonction pour le slide suivant
            function nextSlider () {

                if(imgPos >= imgItems) {
                    imgPos = 1
                } else {
                    imgPos++;
                }

                $('.slider li').hide();
                $('.slider li:nth-child('+ imgPos +')').fadeIn();

                $('.pagination li').css({'color' : '#272727'});
                $('.pagination li:nth-child('+ imgPos +')').css({'color' : '#ef9a9a'});

            }

            // Fonction pour le slide précédent
            function prevSlider () {

                if(imgPos <= 1) {
                    imgPos = imgItems;
                } else {
                    imgPos--;
                }

                $('.slider li').hide();
                $('.slider li:nth-child('+ imgPos +')').fadeIn();

                $('.pagination li').css({'color' : '#272727'});
                $('.pagination li:nth-child('+ imgPos +')').css({'color' : '#ef9a9a'});

            }


        })

    }

    /* ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
    /* ----------------------------------● TODO RETURN FUNCTION
    /* ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ */

    render() {



        return (



            <div className="containerslide">
                <div className="slideshow">
                    <ul className="slider">
                        <li>
                            <img src={image1} alt="explication1"/>
                            <section className="caption">
                            </section>
                        </li>
                        <li>
                            <img src={image2} alt="explication2"/>
                            <section className="caption">
                            </section>
                        </li>
                        <li>
                            <img src={image3} alt="explication3"/>
                            <section className="caption">
                            </section>
                        </li>
                        <li>
                            <img src={image4} alt="explication4"/>
                            <section className="caption">
                            </section>
                        </li>
                        <li>
                            <img src={image5} alt="explication5"/>
                            <section className="caption">
                            </section>
                        </li>
                        <li>
                            <img src={image6} alt="explication6"/>
                            <section className="caption">
                            </section>
                        </li>
                    </ul>

                    <ol className="pagination">

                    </ol>

                    <div className="left">
                        <span className="fas fa-chevron-left"></span>
                    </div>

                    <div className="right">
                        <span className="fas fa-chevron-right"></span>
                    </div>

                    <div className="btnPlayPause">
                    <span className="play fas fa-play fa-2x"></span>
                    <span className="pause fas fa-pause fa-2x"></span>
                    </div>

                </div>
            </div>



        )
    
    
    }


}

