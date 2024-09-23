import React, { useState, useEffect } from "react";
import "./SobreMiRedux.css";

function SobreMiRedux() {
    const [nubePosX, setNubePosX] = useState(50);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const screenWidth = window.innerWidth;

            const centerX = screenWidth / 2;
            const maxShift = 50;

            let offset = ((mouseX - centerX) / centerX) * maxShift;

            let newPosX = 50 + offset;

            newPosX = Math.max(35, Math.min(newPosX, 65));

            setNubePosX(newPosX);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            className="contenedorSobreMi"
            style={{ transform: `translateX(${nubePosX - 50}%)` }}
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
