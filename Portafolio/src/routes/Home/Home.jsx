import Footer from "../../components/footer/Footer";
import "./Home.css";
import Proyectos from "./components/Proyectos";

function Home({
    imgProyecto1,
    imgProyecto2,
    imgProyecto3,
    imgProyecto4,
    imgProyecto5,
}) {
    return (
        <>
            <main>
                <section className="seccionSobreMi">
                    <h3>Sobre mi</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Delectus deleniti maiores quas consequuntur
                        nostrum ea adipisci corporis veritatis laboriosam,
                        perferendis, corrupti quibusdam rerum hic sunt vel
                        dolorem saepe fugiat repellat?
                    </p>
                </section>
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
                    />
                    <Proyectos
                        imgProyecto1={imgProyecto2}
                        nombre="Diseña tu web"
                        descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veniam sequi impedit ut quclassNameem odit perferendis, sunt
                    cumque necessitatibus laborum autem nobis corporis,
                    dignissimos totam expedita, aut ex quisquam perspiciatis
                    voluptatum."
                    />
                    <Proyectos
                        imgProyecto1={imgProyecto3}
                        nombre="Translate to"
                        descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veniam sequi impedit ut quclassNameem odit perferendis, sunt
                    cumque necessitatibus laborum autem nobis corporis,
                    dignissimos totam expedita, aut ex quisquam perspiciatis
                    voluptatum."
                    />
                    <Proyectos
                        imgProyecto1={imgProyecto4}
                        nombre="Foro de Rol"
                        descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veniam sequi impedit ut quclassNameem odit perferendis, sunt
                    cumque necessitatibus laborum autem nobis corporis,
                    dignissimos totam expedita, aut ex quisquam perspiciatis
                    voluptatum."
                    />
                    <Proyectos
                        imgProyecto1={imgProyecto5}
                        nombre="Gestor de servidor"
                        descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veniam sequi impedit ut quclassNameem odit perferendis, sunt
                    cumque necessitatibus laborum autem nobis corporis,
                    dignissimos totam expedita, aut ex quisquam perspiciatis
                    voluptatum."
                    />
                </section>
                <section className="seccionTecnologias">
                    <h3>Tecnologías</h3>
                    <div>
                        <button>
                            <img src="./img/html5Logo.png" alt="" />
                        </button>
                        <button>
                            <img src="./img/cssLogo.png" alt="" />
                        </button>
                        <button>
                            <img src="./img/jsLogo.png" alt="" />
                        </button>
                        <button>
                            <img src="./img/mySqlLogo.png" alt="" />
                        </button>
                        <button>
                            <img src="./img/nodeJsLogo.png" alt="" />
                        </button>
                        <button>
                            <img src="./img/reactLogo.png" alt="" />
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Home;
