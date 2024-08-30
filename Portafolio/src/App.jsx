import { Route, Routes } from "react-router-dom";
import "./App.css";
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
            ></Route>
        </Routes>
    );
}

export default App;
