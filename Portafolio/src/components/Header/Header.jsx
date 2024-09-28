import { NavLink, Outlet } from "react-router-dom";
import "./Header.css";
import NombreIntro from "./NombreIntro.jsx";

function Header({
    imgPerfil,
    imgEnviar,
    imgCopiar,
    imgGithub,
    imgLinkedin,
    imgCV,
}) {
    return (
        <>
            <header>
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
                    imgGithub={imgGithub}
                    imgLinkedin={imgLinkedin}
                    imgCV={imgCV}
                />
            </header>
        </>
    );
}

export default Header;
