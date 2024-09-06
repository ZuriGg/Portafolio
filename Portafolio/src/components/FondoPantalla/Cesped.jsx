import React, { useEffect, useState } from "react";
import "./Cesped.css";

function Cesped() {
    const [briznasPorLinea, setBriznasPorLinea] = useState(0);
    const densidadBriznas = 10;

    const calcularBriznasPorLinea = () => {
        const anchoPantalla = window.innerWidth;
        const cantidadBriznas = Math.floor(
            (anchoPantalla / 30) * densidadBriznas
        );
        setBriznasPorLinea(cantidadBriznas);
    };

    useEffect(() => {
        calcularBriznasPorLinea();

        window.addEventListener("resize", calcularBriznasPorLinea);

        return () => {
            window.removeEventListener("resize", calcularBriznasPorLinea);
        };
    }, []);

    useEffect(() => {
        const briznas = document.querySelectorAll(".blade");

        briznas.forEach((brizna) => {
            const delayAleatorio = Math.random() * 2;
            const duracionAleatoria = 2.5 + Math.random() * 1.5;
            const alturaAleatoria = 3 + Math.random() * 0.5;

            brizna.style.animationDelay = `${delayAleatorio}s`;
            brizna.style.animationDuration = `${duracionAleatoria}s`;
            brizna.style.height = `${alturaAleatoria}vh`;
        });
    }, [briznasPorLinea]);

    return (
        <div className="grass">
            {[...Array(6)].map((_, idx) => (
                <div className={`grass-container grass${idx + 1}`} key={idx}>
                    {[...Array(briznasPorLinea)].map((_, bladeIdx) => (
                        <div className="blade" key={bladeIdx}></div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Cesped;
