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
                        exact
                        activeClassName="active"
                        className="nav-link"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/contacto"
                        exact
                        activeClassName="active"
                        className="nav-link"
                    >
                        Contacto
                    </NavLink>
                    <NavLink
                        to="/sobre-mi"
                        exact
                        activeClassName="active"
                        className="nav-link"
                    >
                        Sobre mí
                    </NavLink>
                    <NavLink
                        to="/proyectos"
                        exact
                        activeClassName="active"
                        className="nav-link"
                    >
                        Proyectos
                    </NavLink>
                    <NavLink
                        to="/tecnologias"
                        exact
                        activeClassName="active"
                        className="nav-link"
                    >
                        Tecnologías
                    </NavLink>
                    <NavLink
                        to="/documentacion"
                        exact
                        activeClassName="active"
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
