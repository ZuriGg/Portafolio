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

    const redirigir = () => {
        window.location.href = "https://github.com/ZuriGg";
    };

    return (
        <div className="headerContentContainer">
            <Link to="/">
                <div className="nombreContainer" data-text="Sergio Manzano">
                    <h1>Sergio Manzano</h1>

                    <h2>Full-Stack Web Developer</h2>
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
                        <button onClick={redirigir}>
                            <img
                                className="imgLogoHeader"
                                src={imgGithub}
                                alt=""
                            />
                        </button>
                        <button>
                            <img
                                className="imgLogoHeader"
                                src={imgLinkedin}
                                alt=""
                            />
                        </button>
                        <button>
                            <img className="imgLogoHeader" src={imgCV} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NombreIntro;
