import React, { useRef, useState } from "react";
import "./Proyectos.css";

function Proyectos({
    imgProyecto1,
    nombre,
    descripcion,
    img1,
    img2,
    img3,
    imgGithub,
}) {
    const [isScaled, setIsScaled] = useState(false);
    const hoverTimeout = useRef(null);

    const handleMouseEnter = () => {
        hoverTimeout.current = setTimeout(() => {
            setIsScaled(true);
        }, 400);
    };

    const handleMouseLeave = () => {
        clearTimeout(hoverTimeout.current);
        setIsScaled(false);
    };

    return (
        <div>
            <article>
                <h4>{nombre}</h4>
                <img
                    className={`button ${isScaled ? "scale-up" : ""}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    src={imgProyecto1}
                    alt=""
                    srcSet=""
                />
                <p>
                    <span>Descripción de proyecto:</span> {descripcion}
                </p>
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
    );
}

export default Proyectos;
