import React from "react";
import image from "../images/hero-image.svg"

export default function About() {
    return (

        <section id="about" className="about-section">
            <div className="container">
                <div className="image">
                    <img src={image} alt="about img" />
                </div>

                <div className="text">
                    <h2>Acerca de</h2>
                    <p>Analista Programador Computacional, titulación en Duoc UC (6,7).</p>

                    <p>
                        Esta página ha sido creada con React, SCSS y react-icons.
                        Diseño acorde a las guías "Mobile first" para un mejor diseño responsivo.
                        Además incluye dark mode automático acorde al tema del dispositivo.
                    </p>

                    <p>
                        Los proyectos son entregados desde otra app utilizando Java Spring Boot a través de una API.
                    </p>
                </div>
            </div>
        </section>
    )
}