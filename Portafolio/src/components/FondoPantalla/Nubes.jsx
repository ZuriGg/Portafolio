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

    const alturaNube = 100;
    const nubesArray = Array.from({ length: Math.ceil(altura / alturaNube) });

    return (
        <div className="contenedor-nubes" ref={componenteRef}>
            {nubesArray.map((_, index) => (
                <div
                    key={index}
                    className="nube"
                    style={{
                        top: `${
                            (index * alturaNube) % (altura + alturaNube)
                        }px`,
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${10 + Math.random() * 30}s`,
                    }}
                ></div>
            ))}
        </div>
    );
}

export default Nubes;
