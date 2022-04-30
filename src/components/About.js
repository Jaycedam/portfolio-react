import React from "react";
import image from "../images/hero-image.svg"

export default function About() {
    return (

        <section id="about" className="about-section">
            <div className="image">
                <img src={image} alt="about img" />
            </div>

            <div className="text">
                <h2>Acerca de</h2>
                <p>
                    Esta página ha sido creada con React, SCSS y react-icons. 
                    Los proyectos son mostrados a través de una API, 
                    desde una aplicación creada con Java Spring Boot.
                    Diseño acorde a las guías "Mobile first" para un mejor diseño responsivo.
                    Además incluye dark mode automático acorde al tema de tu dispositivo. 
                </p>
            </div>
        </section>
    )
}