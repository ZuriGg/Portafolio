import { Link, NavLink, Outlet } from "react-router-dom";
import "./Header.css";

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
                    <NavLink to="/sobre-mi">Sobre mí</NavLink>
                    <NavLink to="/contacto">Contacto</NavLink>
                    <NavLink to="/proyectos">Proyectos</NavLink>
                    <NavLink to="/tecnologias">Tecnologías</NavLink>
                    <NavLink to="/documentacion">Documentación</NavLink>
                </nav>
                <div className="headerContentContainer">
                    <Link to="/">
                        <h1>Sergio Manzano</h1>

                        <h2>Full-Stack Web Developer</h2>
                    </Link>
                    <div className="contactoContainer">
                        <p className="correo">smanzanodev@gmail.com</p>

                        <button className="btnEnvCorreo">
                            <img src={imgEnviar} alt="" />
                        </button>

                        <button
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    "smanzanodev@gmail.com"
                                )
                            }
                            className="btnCopiarEmail"
                        >
                            <img src={imgCopiar} alt="" />
                        </button>
                    </div>

                    <img className="imgPerfil" src={imgPerfil} alt="" />

                    <div className="logosHeaderContainer">
                        <button>
                            <img
                                className="imgGitHubHeader"
                                src={imgGithub}
                                alt=""
                            />
                        </button>
                        <button>
                            <img
                                className="imgLinkedin"
                                src={imgLinkedin}
                                alt=""
                            />
                        </button>
                        <button>
                            <img className="imgCV" src={imgCV} alt="" />
                        </button>
                    </div>
                </div>
            </header>

            <Outlet />
        </>
    );
}

export default Header;
