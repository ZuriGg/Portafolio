import React, { useState, useEffect, useRef } from "react";
import "./Nubes.css";

function Nubes() {
    const [altura, setAltura] = useState(0);
    const componenteRef = useRef(null);

    const actualizarAltura = () => {
        if (componenteRef.current) {
            setAltura(componenteRef.current.offsetHeight);
        }
    };

    useEffect(() => {
        actualizarAltura();

        window.addEventListener("resize", actualizarAltura);

        return () => {
            window.removeEventListener("resize", actualizarAltura);
        };
    }, []);

    const alturaNube = 50;
    const nubesArray = Array.from({ length: Math.ceil(altura / alturaNube) });

    return (
        <div className="contenedor-nubes" ref={componenteRef}>
            {nubesArray.map((_, index) => {
                const duracion = 100 + Math.random() * 250; // duración de animación
                const delay = -Math.random() * duracion; // delay negativo para que empiecen distribuidas

                return (
                    <div
                        key={index}
                        className="nube"
                        style={{
                            top: `${
                                (index * alturaNube) % (altura + alturaNube)
                            }px`,
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${duracion}s`,
                            animationDelay: `${delay}s`, // aquí aplicamos el offset
                        }}
                    ></div>
                );
            })}
        </div>
    );
}

export default Nubes;
