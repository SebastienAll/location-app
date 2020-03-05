import React from 'react';



export default function Signature ({ canvas }) {



        window.addEventListener('load', () => {


        const canvas = document.querySelector('#canvas');
        const ctx = canvas.getContext('2d');

        // Variable
        let painting = false;

        function startPainting (e) {

            painting = true;
            draw(e);

        }

        function finishedPainting () {

            painting = false;
            ctx.beginPath();

        }

        function draw (e) {

            if (!painting) return;
            ctx.lineWidth = 5;
            ctx.lineCap = 'round';

            ctx.lineTo( e.offsetX, e.offsetY );
            ctx.stroke()

        }


        canvas.addEventListener('mousedown', startPainting)
        canvas.addEventListener('mouseup', finishedPainting)
        canvas.addEventListener('mousemove', draw)

    })

    return (

            <canvas id="canvas" className={canvas}>
                
            </canvas>

    )
}
