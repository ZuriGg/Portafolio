import React, { useState, useEffect } from "react";
import "./SobreMiRedux.css";

function SobreMiRedux() {
    const [nubePosX, setNubePosX] = useState(50); // Comienza en el centro

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX; // Obtener la posición X del ratón
            const screenWidth = window.innerWidth; // Obtener el ancho de la ventana

            const nubeWidth = 10; // Ancho de la nube en porcentaje

            // Convertir la posición del ratón a porcentaje
            let newPosX = (mouseX / screenWidth) * 100;

            // Limitar el rango de movimiento
            const minLimit = 10 + nubeWidth / 2; // Límite izquierdo (5% para una nube del 10%)
            const maxLimit = 90 - nubeWidth / 2; // Límite derecho (90% para una nube del 10%)

            // Ajustar la nueva posición si excede los límites
            if (newPosX < minLimit) {
                newPosX = minLimit; // Limitar movimiento a la izquierda
            } else if (newPosX > maxLimit) {
                newPosX = maxLimit; // Limitar movimiento a la derecha
            }

            setNubePosX(newPosX); // Actualizar la posición de la nube
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            className="contenedorSobreMi"
            style={{ transform: `translateX(${nubePosX - 50}vw)` }} // Mover la nube al puntero del ratón
        >
            <section className="seccionSobreMi">
                <p>
                    Soy un desarrollador web que pasa su tiempo libre
                    produciendo música y viajando por la naturaleza...
                </p>
            </section>
        </div>
    );
}

export default SobreMiRedux;
