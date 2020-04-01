import React from "react";
import { Fragment, useEffect, useState } from "react";

export default function Signature(props) {

  const [empty, setEmpty] = useState(true);

  useEffect(() => {

    const canvas = document.getElementById("canvas");
    // Méthode renvoyant un objet appartenent à l'interface CanvasRenderingContext2D
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.strokeStyle = '#272727';


    let painting = false;
    let x = 0;
    let y = 0;

    function startPosition(e) {
      painting = true;
      setEmpty(false);
      draw(e);
    }

    function finishedPosition(e) {
      painting = false;
      ctx.beginPath();
    }

    function draw(e) {
      if (!painting) return;
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    }

    function mobileDraw(e) {
      e.preventDefault();
      if (!painting) return;
      var rect = canvas.getBoundingClientRect();
      var touch = e.changedTouches[0];
      ctx.lineTo(touch.clientX - rect.left, touch.clientY - rect.top);
      ctx.stroke(); // Déssiner les contours
      ctx.beginPath(); // Démarre le tracé
      ctx.moveTo(touch.clientX - rect.left, touch.clientY - rect.top); // Point de départ pour le canvas
    }

    function mobileStart(e) {
      e.preventDefault();
      setEmpty(false);
      painting = true;
      mobileDraw(e);
    }

    function mobileEnd(e) {
      painting = false;
      ctx.beginPath();
    }

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mouseleave", finishedPosition);
    canvas.addEventListener("mousemove", draw);

    canvas.addEventListener("touchstart", mobileStart);
    canvas.addEventListener("touchmove", mobileDraw);
    canvas.addEventListener("touchend", mobileEnd);

    // Nettoyage du canvas
    const clearCanvas = document.querySelector(".btn-clear");
    clearCanvas.addEventListener("click", (e) => {
      e.preventDefault();
      ctx.clearRect(x, y, canvas.width, canvas.height);
      setEmpty(true);
    });

  }, []);

  return (
    <Fragment>
          <div className="border-canvas">
            <canvas id="canvas"/>
          </div>
          <div className="btn-canvas">
            <a href='false' className="btn-clear">Effacer</a>
            {
              empty === false ?
              <a href='false' className='btnValidReserve' onClick={props.handleValid}>Validez</a>
              : <span></span>
            }
          </div>
    </Fragment>
  );
}
