import "./Home.css";
import Proyecto from "../../components/Main/Proyecto.jsx";
import SobreMiRedux from "../../components/Main/SobreMiRedux.jsx";
import Tecnologias from "../../components/Main/Tecnologias.jsx";
import { NavLink } from "react-router-dom";

function Home({
    imgProyecto1,
    imgProyecto2,
    imgProyecto3,
    imgHTML,
    imgCSS,
    imgJavaScript,
    imgMySql,
    imgNode,
    imgReact,
}) {
    return (
        <>
            <SobreMiRedux />
            <section className="seccionProyectosDestacados">
                <h3>Proyectos destacados</h3>
                <div className="proyectosContainer">
                    <Proyecto
                        imgProyecto={imgProyecto1}
                        nombre="Pokédex funcional"
                        descripcion=<>
                            Se trata de la clásica <strong>"Poke API"</strong> a
                            la cual he agregado diversas funcionalidades para
                            exprimir mis habilidades con HTML, CSS y JavaScript
                            sin el uso de ningún FrameWork.
                        </>
                        img1={imgHTML}
                        img2={imgCSS}
                        img3={imgJavaScript}
                        urlGithub="https://github.com/ZuriGg/Pokedex-funcional"
                        urlImg="https://poke-evo-lution.vercel.app/"
                    />
                    <Proyecto
                        imgProyecto={imgProyecto2}
                        nombre="Diseña tu web"
                        descripcion="En proceso..."
                        img1={imgHTML}
                        img2={imgCSS}
                        img3={imgJavaScript}
                    />
                    <Proyecto
                        imgProyecto={imgProyecto3}
                        nombre="Foro de Rol"
                        descripcion="En proceso..."
                        img1={imgHTML}
                        img2={imgCSS}
                        img3={imgJavaScript}
                    />
                </div>
                <NavLink className="nav-link" to="/proyectos">
                    <p>Todos los proyectos...</p>
                </NavLink>
            </section>
            <Tecnologias
                imgMySql={imgMySql}
                imgNode={imgNode}
                imgReact={imgReact}
                imgHTML={imgHTML}
                imgCSS={imgCSS}
                imgJavaScript={imgJavaScript}
            />
        </>
    );
}

export default Home;
