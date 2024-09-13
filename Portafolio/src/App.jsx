import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header/Header.jsx";
import Home from "./routes/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Nubes from "./components/FondoPantalla/Nubes.jsx";
import Cesped from "./components/FondoPantalla/Cesped.jsx";

import Contacto from "./routes/Contacto/Contacto.jsx";
import Documentacion from "./routes/Documentacion/Documentacion.jsx";
import SobreMi from "./routes/SobreMi/SobreMi.jsx";
import Proyectos from "./routes/Proyectos/Proyectos.jsx";
import Tecnologias from "./routes/Tecnologias/Tecnologias.jsx";

//Imagenes
import imgPerfil from "./assets/img/fotoPerfil2.webp";
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

import imgProyecto1 from "./assets/img/proyectoPokeApi.webp";
import imgEjemplo from "./assets/img/imagenDeEjemplo.webp";

import imgNube from "./assets/img/nube1.webp";

function App() {
    const location = useLocation();

    /*     const [audioPlayed, setAudioPlayed] = useState(false);

    const playMusic = () => {
        if (!audioPlayed) {
            const audio = new Audio("/path/to/your/music.mp3");
            audio.play();
            setAudioPlayed(true);
        }
    };

    const handleMouseMove = () => {
        playMusic();
        document.removeEventListener("mousemove", handleMouseMove);
    };

    React.useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []); */

    useEffect(() => {
        if (location.pathname === "/") {
            document.title = "smanzano.dev";
        } else if (location.pathname === "/contacto") {
            document.title = "smanzano - contacto";
        } else if (location.pathname === "/sobre-mi") {
            document.title = "smanzano - sobre-mi";
        } else if (location.pathname === "/proyectos") {
            document.title = "smanzano - proyectos";
        } else if (location.pathname === "/tecnologias") {
            document.title = "smanzano - tecnologías";
        } else if (location.pathname === "/documentacion") {
            document.title = "smanzano - documentación";
        } else {
            document.title = "smanzano.dev";
        }
    }, [location]);

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
                                imgGithub={imgGithub}
                            />
                        }
                    />
                    <Route path="contacto" element={<Contacto />} />
                    <Route path="sobre-mi" element={<SobreMi />} />
                    <Route path="proyectos" element={<Proyectos />} />
                    <Route path="tecnologias" element={<Tecnologias />} />
                    <Route path="documentacion" element={<Documentacion />} />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <Nubes imgNube={imgNube} />
                <Cesped />
            </main>
            <Footer />
        </>
    );
}

export default App;
