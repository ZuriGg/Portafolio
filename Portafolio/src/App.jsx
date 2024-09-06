import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header.jsx";
import Home from "./routes/Home/Home.jsx";
import Cesped from "./components/FondoPantalla/Cesped.jsx";
import Footer from "./components/footer/Footer.jsx";

//Imagenes
import imgPerfil from "./assets/img/fotoPerfil.jpg";
import imgEnviar from "./assets/img/enviar.png";
import imgCopiar from "./assets/img/copiar.png";
import imgGithub from "./assets/img/gitHubLogo.png";
import imgLinkedin from "./assets/img/linkedinLogo.png";

import imgHTML from "./assets/img/html5Logo.png";
import imgCSS from "./assets/img/cssLogo.png";
import imgJavaScript from "./assets/img/jsLogo.png";
import imgMySql from "./assets/img/mySqlLogo.png";
import imgNode from "./assets/img/nodeJsLogo.png";
import imgReact from "./assets/img/reactLogo.png";

import imgCV from "./assets/img/cvLogo.png";

import imgProyecto1 from "./assets/img/proyectoPokeApi.png";
import imgEjemplo from "./assets/img/imagenDeEjemplo.png";

import imgNube from "./assets/img/nube1.png";

import Nubes from "./components/FondoPantalla/Nubes.jsx";

function App() {
    return (
        <>
            <Header
                imgPerfil={imgPerfil}
                imgEnviar={imgEnviar}
                imgCopiar={imgCopiar}
                imgGithub={imgGithub}
                imgLinkedin={imgLinkedin}
                imgCV={imgCV}
            />

            <main>
                <Routes>
                    <Route
                        index
                        element={
                            <Home
                                imgProyecto1={imgProyecto1}
                                imgProyecto2={imgEjemplo}
                                imgProyecto3={imgEjemplo}
                                imgProyecto4={imgEjemplo}
                                imgProyecto5={imgEjemplo}
                                imgHTML={imgHTML}
                                imgCSS={imgCSS}
                                imgJavaScript={imgJavaScript}
                                imgMySql={imgMySql}
                                imgNode={imgNode}
                                imgReact={imgReact}
                            />
                        }
                    />
                    <Route path="sobre-mi" element={<p>Mama</p>} />
                    <Route path="contacto" element={<p>MEME</p>} />
                    <Route path="proyectos" element={<p>MIMI</p>} />
                    <Route path="tecnologias" element={<p>MOMO</p>} />
                    <Route path="documentacion" element={<p>MUMU</p>} />
                </Routes>
                <Nubes imgNube={imgNube} />
                <Cesped />
            </main>
            <Footer />
        </>
    );
}

export default App;
