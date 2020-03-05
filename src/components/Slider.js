
import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';
import image1 from '../images/01.jpg';
import image2 from '../images/02.jpg';
import image3 from '../images/03.jpg';
import image4 from '../images/04.jpg';
import image5 from '../images/05.jpg';
import image6 from '../images/06.jpg';

export default class Slider extends Component {

    componentDidMount = () => {

        $(document).ready(() => {

            var imgItems = $('.slider li').length;      // Nombres d'images dans le slide
            var imgPos = 1;
            
            for (var i = 1 ; i <= imgItems ; i++) {     // Rajout automatique de curseur selon le nombre d'image
                $('.pagination').append('<li><span class="fas fa-bicycle fa-2x"></span></li>');
            }

            $('.slider li').hide();                                         // Cache toutes les images dans le slider
            $('.slider li:first').show();                                   // Affiche la première image du slider
            $('.pagination li:first').css({'color' : '#ef9a9a'});           // Met la couleur indiqué sur le premier curseur

            $('.pagination li').click(pagination);
            $('.right span').click(nextSlider);
            $('.left span').click(prevSlider);

            setInterval( () => {
                nextSlider();
            }, 4000);

            function pagination () {

                var paginationPos = $(this).index() + 1;                        // Récupère la position de l'image via l'index et ajoute 1 (Pour éviter de partir de 0)

                $('.slider li').hide();                                         // Cache toutes les images
                $('.slider li:nth-child(' + paginationPos + ')').fadeIn();      // Affiche l'image en rapport avec l'index avec un effet de transition
                
                $('.pagination li').css({'color' : '#272727'}); 
                $(this).css({'color' : '#ef9a9a'});

                imgPos = paginationPos;

            }

            function nextSlider () {

                if(imgPos >= imgItems) {
                    imgPos = 1
                } else {
                    imgPos++;
                }

                $('.slider li').hide();                                         // Cache toutes les images
                $('.slider li:nth-child('+ imgPos +')').fadeIn();

                $('.pagination li').css({'color' : '#272727'});
                $('.pagination li:nth-child('+ imgPos +')').css({'color' : '#ef9a9a'});

            }

            function prevSlider () {

                if(imgPos <= 1) {
                    imgPos = imgItems;
                } else {
                    imgPos--;
                }

                $('.slider li').hide();                                         // Cache toutes les images
                $('.slider li:nth-child('+ imgPos +')').fadeIn();

                $('.pagination li').css({'color' : '#272727'});
                $('.pagination li:nth-child('+ imgPos +')').css({'color' : '#ef9a9a'});

            }


        })

    }

    render() {



        return (



            <div className="containerslide container-fluid">
                <div className="slideshow">
                    <ul className="slider">
                        <li>
                            <img src={image1} alt=""/>
                            <section className="caption">
                                <h1>lorem ipsum 1</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis euismod velit. Aliquam elit massa, volutpat at efficitur a, pellentesque.</p>
                            </section>
                        </li>
                        <li>
                            <img src={image2} alt=""/>
                            <section className="caption">
                                <h1>lorem ipsum 2</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis euismod velit. Aliquam elit massa, volutpat at efficitur a, pellentesque.</p>
                            </section>
                        </li>
                        <li>
                            <img src={image3} alt=""/>
                            <section className="caption">
                                <h1>lorem ipsum 3</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis euismod velit. Aliquam elit massa, volutpat at efficitur a, pellentesque.</p>
                            </section>
                        </li>
                        <li>
                            <img src={image4} alt=""/>
                            <section className="caption">
                                <h1>lorem ipsum 4</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis euismod velit. Aliquam elit massa, volutpat at efficitur a, pellentesque.</p>
                            </section>
                        </li>
                        <li>
                            <img src={image5} alt=""/>
                            <section className="caption">
                                <h1>lorem ipsum 5</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis euismod velit. Aliquam elit massa, volutpat at efficitur a, pellentesque.</p>
                            </section>
                        </li>
                        <li>
                            <img src={image6} alt=""/>
                            <section className="caption">
                                <h1>lorem ipsum 6</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis euismod velit. Aliquam elit massa, volutpat at efficitur a, pellentesque.</p>
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

                </div>
            </div>



        )
    
    
    }


}

