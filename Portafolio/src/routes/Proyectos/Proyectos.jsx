import React from "react";
import "./Proyectos.css";
import Proyecto from "../../components/Main/Proyecto";

function Proyectos({
    imgProyecto1,
    imgProyecto2,
    imgProyecto3,
    imgHTML,
    imgCSS,
    imgJavaScript,
}) {
    return (
        <>
            <section className="seccionProyectos">
                <Proyecto
                    imgProyecto={imgProyecto1}
                    nombre="Pokédex funcional"
                    descripcion=<>
                        Se trata de la clásica <strong>"Poke API"</strong> a la
                        cual he agregado diversas funcionalidades para exprimir
                        mis habilidades con HTML, CSS y JavaScript sin el uso de
                        ningún FrameWork.
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
            </section>
        </>
    );
}

export default Proyectos;
