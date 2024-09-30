import React, { useRef, useState } from "react";
import "./Proyecto.css";

function Proyecto({
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
        <div className="contenedorProyecto">
            <div className="cajaProyecto">
                <article>
                    <h3>{nombre}</h3>
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
                            <div className="containerLogosProyecto">
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
                            <div className="containerGithubProyecto">
                                <a
                                    href={urlGithub}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="imgGithub"
                                        src="./assets/img/gitHubLogo.png"
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

export default Proyecto;
