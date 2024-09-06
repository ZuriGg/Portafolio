import "./Home.css";
import Proyectos from "../../components/Proyectos";

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
            <div className="contenedorSobreMi">
                <section className="seccionSobreMi">
                    <h3>Sobre mi</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Delectus deleniti maiores quas consequuntur
                        nostrum ea adipisci
                    </p>
                </section>
            </div>
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
            <section className="seccionTecnologias">
                <h3>Tecnologías</h3>
                <div className="seccionBtnTec">
                    <button>
                        <img src={imgHTML} alt="" />
                    </button>
                    <button>
                        <img src={imgCSS} alt="" />
                    </button>
                    <button>
                        <img src={imgJavaScript} alt="" />
                    </button>
                    <button>
                        <img src={imgMySql} alt="" />
                    </button>
                    <button>
                        <img src={imgNode} alt="" />
                    </button>
                    <button>
                        <img src={imgReact} alt="" />
                    </button>
                </div>
            </section>
        </>
    );
}

export default Home;
