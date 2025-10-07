import React from "react";
import { Link } from "react-router-dom";
import "./NombreIntro.css";

function NombreIntro({
    imgPerfil,
    imgEnviar,
    imgCopiar,
    imgGithub,
    imgLinkedin,
    imgCV,
}) {
    const handleClick = () => {
        const mailtoLink = "mailto:smanzanodev@gmail.com";
        window.location.href = mailtoLink;
    };

    const handleRedirigir = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="headerContentContainer">
            <Link to="/">
                <div className="nombreContainer" data-text="Sergio Manzano">
                    <h1>Sergio Manzano Esclapez</h1>

                    <h2>Full-Stack Web & Mobile Developer</h2>
                </div>
            </Link>
            <div className="contactoContainer">
                <p className="correo">smanzanodev@gmail.com</p>

                <button onClick={handleClick} className="btnEnvCorreo">
                    <img src={imgEnviar} alt="" />
                </button>

                <button
                    onClick={() =>
                        navigator.clipboard.writeText("smanzanodev@gmail.com")
                    }
                    className="btnCopiarEmail"
                >
                    <img src={imgCopiar} alt="" />
                </button>
            </div>

            <img className="imgPerfil" src={imgPerfil} alt="" />

            <div className="logosHeaderContainer">
                <div className="boxContainer">
                    <div className="inContainer">
                        <button
                            onClick={() =>
                                handleRedirigir("https://github.com/ZuriGg")
                            }
                        >
                            <img
                                className="imgLogoHeader"
                                src={imgGithub}
                                alt="GitHub"
                            />
                        </button>
                        <button
                            onClick={() =>
                                handleRedirigir(
                                    "https://www.linkedin.com/in/sergio-manzano-esclapez/"
                                )
                            }
                        >
                            <img
                                className="imgLogoHeader"
                                src={imgLinkedin}
                                alt="LinkedIn"
                            />
                        </button>
                        <button
                            onClick={() =>
                                handleRedirigir(
                                    "/Currículum Vitae Sergio Manzano Esclapez.pdf"
                                )
                            }
                        >
                            <img
                                className="imgLogoHeader"
                                src={imgCV}
                                alt="CV"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NombreIntro;
