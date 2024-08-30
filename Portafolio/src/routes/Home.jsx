import Footer from "../components/footer/Footer";
import "./Home.css";

function Home(imgProyecto1) {
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
                    <div>
                        <article>
                            <h4>Poke Api</h4>
                            <img
                                className="imgProyecto"
                                src={imgProyecto1}
                                alt=""
                                srcset=""
                            />
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Veniam sequi impedit ut
                                quclassNameem odit perferendis, sunt cumque
                                necessitatibus laborum autem nobis corporis,
                                dignissimos totam expedita, aut ex quisquam
                                perspiciatis voluptatum.
                            </p>
                            <img
                                className="imgGithub"
                                src="./img/gitHubLogo.png"
                                alt=""
                                srcset=""
                            />
                            <h5>Tecnologías</h5>
                            <img src="" alt="" srcset="" />
                            <img src="" alt="" srcset="" />
                            <img src="" alt="" srcset="" />
                        </article>
                        <article>
                            <h4>Nombre</h4>
                            <img
                                className="imgProyecto"
                                src=""
                                alt=""
                                srcset=""
                            />
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Veniam sequi impedit ut
                                quclassNameem odit perferendis, sunt cumque
                                necessitatibus laborum autem nobis corporis,
                                dignissimos totam expedita, aut ex quisquam
                                perspiciatis voluptatum.
                            </p>
                            <img
                                className="imgGithub"
                                src="./img/gitHubLogo.png"
                                alt=""
                                srcset=""
                            />
                            <h5>Tecnologías</h5>
                            <img src="" alt="" srcset="" />
                            <img src="" alt="" srcset="" />
                            <img src="" alt="" srcset="" />
                        </article>
                        <article>
                            <h4>Nombre</h4>
                            <img
                                className="imgProyecto"
                                src=""
                                alt=""
                                srcset=""
                            />
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Veniam sequi impedit ut
                                quclassNameem odit perferendis, sunt cumque
                                necessitatibus laborum autem nobis corporis,
                                dignissimos totam expedita, aut ex quisquam
                                perspiciatis voluptatum.
                            </p>
                            <img
                                class="imgGithub"
                                src="./img/gitHubLogo.png"
                                alt=""
                                srcset=""
                            />
                            <h5>Tecnologías</h5>
                            <img src="" alt="" srcset="" />
                            <img src="" alt="" srcset="" />
                            <img src="" alt="" srcset="" />
                        </article>
                    </div>
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
