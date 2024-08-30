import { Link, NavLink, Outlet } from "react-router-dom";
import "./Main.css";

function Header({}) {
    return (
        <>
            <main>
                <section id="seccionProyectosDestacados">
                    <h3>Proyectos destacados</h3>
                    <div>
                        <article>
                            <h4>Poke Api</h4>
                            <img
                                class="imgProyecto"
                                src="./img/proyectoPokeApi.png"
                                alt=""
                                srcset=""
                            />
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Veniam sequi impedit ut quidem
                                odit perferendis, sunt cumque necessitatibus
                                laborum autem nobis corporis, dignissimos totam
                                expedita, aut ex quisquam perspiciatis
                                voluptatum.
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
                        <article>
                            <h4>Nombre</h4>
                            <img class="imgProyecto" src="" alt="" srcset="" />
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Veniam sequi impedit ut quidem
                                odit perferendis, sunt cumque necessitatibus
                                laborum autem nobis corporis, dignissimos totam
                                expedita, aut ex quisquam perspiciatis
                                voluptatum.
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
                        <article>
                            <h4>Nombre</h4>
                            <img class="imgProyecto" src="" alt="" srcset="" />
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Veniam sequi impedit ut quidem
                                odit perferendis, sunt cumque necessitatibus
                                laborum autem nobis corporis, dignissimos totam
                                expedita, aut ex quisquam perspiciatis
                                voluptatum.
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
                <section id="seccionTecnologias">
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
        </>
    );
}

export default Header;
