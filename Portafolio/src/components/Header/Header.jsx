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
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/contacto">Contacto</NavLink>
                    <NavLink to="/sobre-mi">Sobre mí</NavLink>
                    <NavLink to="/proyectos">Proyectos</NavLink>
                    <NavLink to="/tecnologias">Tecnologías</NavLink>
                    <NavLink to="/documentacion">Documentación</NavLink>
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

            <Outlet />
        </>
    );
}

export default Header;
