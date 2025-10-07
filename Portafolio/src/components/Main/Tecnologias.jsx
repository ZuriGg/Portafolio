import React from "react";
import "./Tecnologias.css";

function Tecnologias({
    imgMySql,
    imgReact,
    imgVite,
    imgReactNative,
    imgNode,
    imgHTML,
    imgCSS,
    imgJavaScript,
}) {
    return (
        <section className="seccionTecnologias">
            <h2 className="tituloMain">Tecnologías</h2>
            <div className="cajaTecnologias">
                <div className="seccionBtnTec">
                    <button>
                        <img src={imgHTML} alt="" />
                        {/* <h3>HTML 5</h3>
                        <p>
                            Estructuro páginas web semánticas y accesibles,
                            utilizando etiquetas modernas, formularios, APIs de
                            almacenamiento local y multimedia para crear sitios
                            claros, organizados y compatibles con todos los
                            navegadores y dispositivos
                        </p> */}
                    </button>
                    <button>
                        <img src={imgCSS} alt="" />
                        {/* <h3>CSS 3</h3>
                        <p>
                            Diseño interfaces atractivas y responsivas usando
                            Flexbox, Grid, animaciones, transiciones y variables
                            CSS, optimizando la experiencia de usuario en
                            diferentes dispositivos y resoluciones
                        </p> */}
                    </button>
                    <button>
                        <img src={imgJavaScript} alt="" />
                        {/* <h3>JavaScript (ES6)</h3>
                        <p>
                            Desarrollo lógica avanzada para sitios y
                            aplicaciones web con JavaScript moderno: manejo de
                            DOM, eventos, fetch para APIs, funciones asíncronas,
                            módulos y patrones de programación eficientes.
                        </p> */}
                    </button>
                    <button>
                        <img src={imgMySql} alt="" />
                        {/* <h3>MySql</h3>
                        <p>
                            Diseño y gestiono bases de datos relacionales,
                            creando tablas normalizadas, consultas complejas,
                            asegurando integridad y eficiencia en la
                            manipulación de datos.
                        </p> */}
                    </button>
                    <button>
                        <img src={imgNode} alt="" />
                        {/* <h3>Node.js</h3>
                        <p>
                            Creo servidores y APIs RESTful escalables usando
                            Node.js, manejo de rutas, middleware, autenticación
                            y comunicación con bases de datos, garantizando
                            aplicaciones rápidas y seguras.
                        </p> */}
                    </button>
                    <button>
                        <img src={imgVite} alt="" />
                        {/* <h3>Vite</h3>
                        <p>
                            Configuro y optimizo proyectos frontend modernos con
                            Vite, incluyendo React y JavaScript puro, logrando
                            tiempos de desarrollo rápidos y un entorno eficiente
                            de hot-reload y build optimizado.
                        </p> */}
                    </button>
                    <button>
                        <img src={imgReact} alt="" />
                        {/* <h3>React.js</h3>
                        <p>
                            Desarrollo interfaces web interactivas y modulares
                            con componentes reutilizables, manejo de estados,
                            hooks, routing y optimización del renderizado para
                            experiencias dinámicas y mantenibles.
                        </p> */}
                    </button>
                    <button>
                        <img src={imgReactNative} alt="" />
                        {/* <h3>React Native</h3>
                        <p>
                            Creo aplicaciones móviles nativas multiplataforma
                            (iOS y Android) con React Native, gestionando
                            navegación, estados, APIs de dispositivos y estilos
                            responsivos para ofrecer experiencias móviles
                            fluidas.
                        </p> */}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Tecnologias;
