import React from "react";

function Proyectos({
    imgProyecto1,
    nombre,
    descripcion,
    img1,
    img2,
    img3,
    imgGithub,
}) {
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
                    <span>Descripción de proyecto:</span> {descripcion}
                </p>
                <div>
                    <h5>Tecnologías</h5>
                    <div className="containerLogosProyectos">
                        <img className="imgLogos" src={img1} alt="" srcSet="" />
                        <img className="imgLogos" src={img2} alt="" srcSet="" />
                        <img className="imgLogos" src={img3} alt="" srcSet="" />
                    </div>
                    <div className="containerGithubProyectos">
                        {" "}
                        <img
                            className="imgGithub"
                            src={imgGithub}
                            alt=""
                            srcSet=""
                        />
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Proyectos;
