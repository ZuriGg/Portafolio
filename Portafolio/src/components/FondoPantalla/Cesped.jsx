import React, { useEffect } from "react";
import "./Cesped.css";

function Cesped() {
    useEffect(() => {
        const briznas = document.querySelectorAll(".blade");

        briznas.forEach((brizna) => {
            const delayAleatorio = Math.random() * 2;
            const duracionAleatoria = 2.5 + Math.random() * 1.5;
            const alturaAleatoria = 2 + Math.random() * 1;

            brizna.style.animationDelay = `${delayAleatorio}s`;
            brizna.style.animationDuration = `${duracionAleatoria}s`;
            brizna.style.height = `${alturaAleatoria}vh`;
        });
    }, []); // El array vacío hace que se ejecute solo una vez al montar el componente

    return (
        <div className="grass">
            {/* Puedes reducir la duplicación de código con un pequeño bucle si lo prefieres */}
            {[...Array(4)].map((_, idx) => (
                <div className={`grass-container grass${idx + 1}`} key={idx}>
                    {[...Array(100)].map((_, bladeIdx) => (
                        <div className="blade" key={bladeIdx}></div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Cesped;
