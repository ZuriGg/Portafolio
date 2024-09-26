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
    urlGithub,
    urlImg,
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

    const handleLinkImg = () => {
        if (urlImg) {
            window.open(urlImg, "_blank");
        }
    };

    return (
        <div className={className}>
            <div className="cajaProyectos">
                <article>
                    <h4>{nombre}</h4>
                    <img
                        className={`button ${isScaled ? "scale-up" : ""}`}
                        onClick={handleLinkImg}
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
                                <a
                                    href={urlGithub}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="imgGithub"
                                        src={imgGithub}
                                        alt=""
                                        srcSet=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default Proyectos;
