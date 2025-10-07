import React, { useEffect, useRef } from "react";
import "./Nubes.css";

function Nubes() {
    const componenteRef = useRef(null);
    const nubesRef = useRef([]);

    useEffect(() => {
        const altura = componenteRef.current.offsetHeight;
        const alturaNube = 50;
        const numNubes = Math.ceil(altura / alturaNube);

        nubesRef.current = Array.from({ length: numNubes }).map(() => {
            const duracion = 100 + Math.random() * 250;
            return {
                top: Math.random() * altura,
                left: Math.random() * 100,
                duracion,
                delay: -Math.random() * duracion,
            };
        });
    }, []);

    return (
        <div className="contenedor-nubes" ref={componenteRef}>
            {nubesRef.current.map((nube, i) => (
                <div
                    key={i}
                    className="nube"
                    style={{
                        top: `${nube.top}px`,
                        left: `${nube.left}%`,
                        animationDuration: `${nube.duracion}s`,
                        animationDelay: `${nube.delay}s`,
                    }}
                ></div>
            ))}
        </div>
    );
}

export default Nubes;
