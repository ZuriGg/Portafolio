import { NavLink, Outlet } from "react-router-dom";
import "./Header.css";
import NombreIntro from "./NombreIntro.jsx";
import Espacio from "../Espacio/Espacio.jsx";

function Header({
    imgPerfil,
    imgEnviar,
    imgCopiar,
    imgGithubWhite,
    imgLinkedin,
    imgCV,
}) {
    return (
        <>
            <header>
                <Espacio />

                <nav>
                    <NavLink
                        to="/"
                        activeclassname="active"
                        className="nav-link"
                    >
                        Portafolio
                    </NavLink>
                    <NavLink
                        to="/proyectos"
                        activeclassname="active"
                        className="nav-link"
                    >
                        Proyectos
                    </NavLink>
                    <NavLink
                        to="/documentacion"
                        activeclassname="active"
                        className="nav-link"
                    >
                        Documentación
                    </NavLink>
                </nav>
                <NombreIntro
                    imgPerfil={imgPerfil}
                    imgEnviar={imgEnviar}
                    imgCopiar={imgCopiar}
                    imgGithub={imgGithubWhite}
                    imgLinkedin={imgLinkedin}
                    imgCV={imgCV}
                />
            </header>
        </>
    );
}

export default Header;
