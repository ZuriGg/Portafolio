import { Route, Routes } from "react-router-dom";
import "./App.css";

//Home
import Home from "./routes/Home/Home";
//Imagenes de Home
import imgProyecto1 from "./assets/img/proyectoPokeApi.png";
import imgEjemplo from "./assets/img/imagenDeEjemplo.png";

//Header
import Header from "./components/Header/Header";
//Imagenes de header
import imgPerfil from "./assets/img/fotoPerfil.jpg";
import imgEnviar from "./assets/img/enviar.png";
import imgCopiar from "./assets/img/copiar.png";
import imgGithub from "./assets/img/gitHubLogo.png";
import imgLinkedin from "./assets/img/linkedinLogo.png";
import imgCV from "./assets/img/cvLogo.png";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Header
                        imgPerfil={imgPerfil}
                        imgEnviar={imgEnviar}
                        imgCopiar={imgCopiar}
                        imgGithub={imgGithub}
                        imgLinkedin={imgLinkedin}
                        imgCV={imgCV}
                    />
                }
            >
                <Route
                    index
                    element={
                        <Home
                            imgProyecto1={imgProyecto1}
                            imgProyecto2={imgEjemplo}
                            imgProyecto3={imgEjemplo}
                            imgProyecto4={imgEjemplo}
                            imgProyecto5={imgEjemplo}
                        />
                    }
                />
                <Route path="sobre-mi" element={<p>Mama</p>} />
                <Route path="contacto" element={<p>MEME</p>} />
                <Route path="proyectos" element={<p>MIMI</p>} />
                <Route path="tecnologias" element={<p>MOMO</p>} />
                <Route path="documentacion" element={<p>MUMU</p>} />
            </Route>
        </Routes>
    );
}

export default App;
