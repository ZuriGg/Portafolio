import React from "react";

function Proyectos({ imgProyecto1, nombre, descripcion }) {
    return (
        <div>
            <article>
                <h4>{nombre}</h4>
                <img
                    className="imgProyecto"
                    src={imgProyecto1}
                    alt=""
                    srcSet=""
                />
                <p>
                    <strong>Descripción de proyecto:</strong> {descripcion}
                </p>
                <img
                    className="imgGithub"
                    src="./img/gitHubLogo.png"
                    alt=""
                    srcSet=""
                />
                <h5>Tecnologías</h5>
                <img src="" alt="" srcSet="" />
                <img src="" alt="" srcSet="" />
                <img src="" alt="" srcSet="" />
            </article>
        </div>
    );
}

export default Proyectos;
