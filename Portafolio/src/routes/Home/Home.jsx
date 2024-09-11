import "./Home.css";
import Proyectos from "../../components/Main/Proyectos.jsx";
import SobreMiRedux from "../../components/Main/SobreMiRedux.jsx";
import Tecnologias from "../../components/Main/Tecnologias.jsx";

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
    imgGithub,
}) {
    return (
        <>
            <SobreMiRedux />
            <section className="seccionProyectosDestacados">
                <h3>Proyectos destacados</h3>
                <div className="proyectosContainer">
                    <Proyectos
                        className="proyecto1"
                        imgProyecto={imgProyecto1}
                        nombre="Pokédex funcional"
                        descripcion=<>
                            "Se trata de la clásica"<strong>"Poke API"</strong>{" "}
                            "a la cual he agregado diversas funcionalidades para
                            exprimir mis habilidades con HTML, CSS y JavaScript
                            sin el uso de ningún FrameWork."
                        </>
                        imgGithub={imgGithub}
                        img1={imgHTML}
                        img2={imgCSS}
                        img3={imgJavaScript}
                    />
                    <Proyectos
                        className="proyecto2"
                        imgProyecto={imgProyecto2}
                        nombre="Diseña tu web"
                        descripcion="En proceso..."
                        imgGithub={imgGithub}
                        img1={imgHTML}
                        img2={imgCSS}
                        img3={""}
                    />
                    <Proyectos
                        className="proyecto4"
                        imgProyecto={imgProyecto3}
                        nombre="Foro de Rol"
                        descripcion="En proceso..."
                        imgGithub={imgGithub}
                        img1={imgHTML}
                        img2={imgCSS}
                        img3={imgJavaScript}
                    />
                </div>
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
