import React from "react";
import { Link } from "react-router-dom";

function Presentacion({
    imgPerfil,
    imgEnviar,
    imgCopiar,
    imgGithub,
    imgLinkedin,
    imgCV,
}) {
    return (
        <div className="headerContentContainer">
            <Link to="/">
                <div className="nombreContainer">
                    <h1>Sergio Manzano</h1>

                    <h2>Full-Stack Web Developer</h2>
                </div>
            </Link>
            <div className="contactoContainer">
                <p className="correo">smanzanodev@gmail.com</p>

                <button className="btnEnvCorreo">
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
                <button>
                    <img className="imgLogoHeader" src={imgGithub} alt="" />
                </button>
                <button>
                    <img className="imgLogoHeader" src={imgLinkedin} alt="" />
                </button>
                <button>
                    <img className="imgLogoHeader" src={imgCV} alt="" />
                </button>
            </div>
        </div>
    );
}

export default Presentacion;
