import React from "react";
import "./Tecnologias.css";

function Tecnologias({
    imgMySql,
    imgReact,
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
            </div>
        </section>
    );
}

export default Tecnologias;
