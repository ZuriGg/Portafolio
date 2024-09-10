import "./Home.css";
import Proyectos from "../../components/Main/Proyectos.jsx";
import SobreMiRedux from "../../components/Main/SobreMiRedux.jsx";
import Tecnologias from "../../components/Main/Tecnologias.jsx";

function Home({
    imgProyecto1,
    imgProyecto2,
    imgProyecto3,
    imgProyecto4,
    imgProyecto5,
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
                <Proyectos
                    imgProyecto1={imgProyecto1}
                    nombre="Pokédex indexada"
                    descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veniam sequi impedit ut quclassNameem odit perferendis, sunt
                    cumque necessitatibus laborum autem nobis corporis,
                    dignissimos totam expedita, aut ex quisquam perspiciatis
                    voluptatum."
                    imgGithub={imgGithub}
                    img1={imgHTML}
                    img2={imgCSS}
                    img3={imgJavaScript}
                />
                <Proyectos
                    imgProyecto1={imgProyecto2}
                    nombre="Diseña tu web"
                    descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veniam sequi impedit ut quclassNameem odit perferendis, sunt
                    cumque necessitatibus laborum autem nobis corporis,
                    dignissimos totam expedita, aut ex quisquam perspiciatis
                    voluptatum."
                    imgGithub={imgGithub}
                    img1={imgHTML}
                    img2={imgCSS}
                    img3={imgJavaScript}
                />
                <Proyectos
                    imgProyecto1={imgProyecto3}
                    nombre="Translate to"
                    descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veniam sequi impedit ut quclassNameem odit perferendis, sunt
                    cumque necessitatibus laborum autem nobis corporis,
                    dignissimos totam expedita, aut ex quisquam perspiciatis
                    voluptatum."
                    imgGithub={imgGithub}
                    img1={imgHTML}
                    img2={imgCSS}
                    img3={imgJavaScript}
                />
                <Proyectos
                    imgProyecto1={imgProyecto4}
                    nombre="Foro de Rol"
                    descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veniam sequi impedit ut quclassNameem odit perferendis, sunt
                    cumque necessitatibus laborum autem nobis corporis,
                    dignissimos totam expedita, aut ex quisquam perspiciatis
                    voluptatum."
                    imgGithub={imgGithub}
                    img1={imgHTML}
                    img2={imgCSS}
                    img3={imgJavaScript}
                />
                <Proyectos
                    imgProyecto1={imgProyecto5}
                    nombre="Gestor de servidor"
                    descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veniam sequi impedit ut quclassNameem odit perferendis, sunt
                    cumque necessitatibus laborum autem nobis corporis,
                    dignissimos totam expedita, aut ex quisquam perspiciatis
                    voluptatum."
                    imgGithub={imgGithub}
                    img1={imgHTML}
                    img2={imgCSS}
                    img3={imgJavaScript}
                />
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
