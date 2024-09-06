/* import React, { useState, useEffect, useRef } from "react";
import "./Nubes.css";

function Nubes() {
    const nubesArray = Array.from({ length: 20 });

    const [altura, setAltura] = useState(0); // Variable para almacenar la altura
    const componenteRef = useRef(null); // Referencia al componente

    // Función para actualizar la altura
    const actualizarAltura = () => {
        if (componenteRef.current) {
            setAltura(componenteRef.current.offsetHeight);
        }
    };

    // Obtener la altura del componente cuando se monta y cuando se cambia el tamaño de la ventana
    useEffect(() => {
        actualizarAltura(); // Obtener la altura cuando el componente se renderiza

        // Actualizar la altura cuando cambia el tamaño de la ventana
        window.addEventListener("resize", actualizarAltura);

        // Cleanup: eliminar el event listener cuando el componente se desmonte
        return () => {
            window.removeEventListener("resize", actualizarAltura);
        };
    }, []);

    return (
        <div className="contenedor-nubes">
            {nubesArray.map((_, index) => (
                <div key={index} className={`nube nube${index + 1}`}></div>
            ))}
        </div>
    );
}

export default Nubes;

 */

import React, { useState, useEffect, useRef } from "react";
import "./Nubes.css";

function Nubes() {
    const [altura, setAltura] = useState(0); // Variable para almacenar la altura
    const componenteRef = useRef(null); // Referencia al componente

    // Función para actualizar la altura
    const actualizarAltura = () => {
        if (componenteRef.current) {
            setAltura(componenteRef.current.offsetHeight);
        }
    };

    // Obtener la altura del componente cuando se monta y cuando se cambia el tamaño de la ventana
    useEffect(() => {
        actualizarAltura(); // Obtener la altura cuando el componente se renderiza

        // Actualizar la altura cuando cambia el tamaño de la ventana
        window.addEventListener("resize", actualizarAltura);

        // Cleanup: eliminar el event listener cuando el componente se desmonte
        return () => {
            window.removeEventListener("resize", actualizarAltura);
        };
    }, []);

    // Calcular la cantidad de nubes y sus posiciones
    const alturaNube = 100; // Altura aproximada de una nube
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
                        }px`, // Posición vertical de la nube
                        left: `${Math.random() * 100}%`, // Posición horizontal aleatoria
                        animationDuration: `${10 + Math.random() * 60}s`, // Duración de la animación aleatoria
                    }}
                ></div>
            ))}
        </div>
    );
}

export default Nubes;
