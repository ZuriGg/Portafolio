import React, { useRef, useState } from "react";
import "./Proyectos.css";

function Proyectos({
    imgProyecto,
    nombre,
    descripcion,
    img1,
    img2,
    img3,
    imgGithub,
    className,
}) {
    const [isScaled, setIsScaled] = useState(false);
    const hoverTimeout = useRef(null);

    const handleMouseEnter = () => {
        hoverTimeout.current = setTimeout(() => {
            setIsScaled(true);
        }, 300);
    };

    const handleMouseLeave = () => {
        clearTimeout(hoverTimeout.current);
        setIsScaled(false);
    };

    return (
        <div className={className}>
            <div className="cajaProyectos">
                <article>
                    <h4>{nombre}</h4>
                    <img
                        className={`button ${isScaled ? "scale-up" : ""}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        src={imgProyecto}
                        alt=""
                        srcSet=""
                    />
                    <h5>Descripción de proyecto:</h5>
                    <p>{descripcion}</p>
                    <div>
                        <h5>Tecnologías</h5>
                        <div>
                            <div className="containerLogosProyectos">
                                <img
                                    className="imgLogos"
                                    src={img1}
                                    alt=""
                                    srcSet=""
                                />
                                <img
                                    className="imgLogos"
                                    src={img2}
                                    alt=""
                                    srcSet=""
                                />
                                <img
                                    className="imgLogos"
                                    src={img3}
                                    alt=""
                                    srcSet=""
                                />
                            </div>
                            <div className="containerGithubProyectos">
                                {" "}
                                <img
                                    className="imgGithub"
                                    src={imgGithub}
                                    alt=""
                                    srcSet=""
                                />
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default Proyectos;
