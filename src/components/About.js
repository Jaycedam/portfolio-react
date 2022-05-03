import React from "react";
import image from "../images/circles.svg"

export default function About() {
    return (

        <section id="about" className="about-section observer">
            <div className="container">
                <div className="image">
                    <img src={image} alt="about img" />
                </div>

                <div className="text">
                    <h1>Acerca de</h1>
                    <p>Analista Programador Computacional, titulación en Duoc UC.
                        <br />
                        Front-end construído con React y SCSS.
                        <br />
                        Backend: Spring Boot para la entrega de proyectos a través de API.
                        <br />
                        Diseño responsivo "mobile first" y dark mode automático.
                    </p>

                    <br />

                    <div className="call-to-action">
                        <a href="https://drive.google.com/file/d/1EwUWO2H98wCTPYqCkNQG8r_nfj05Ts2N/view?usp=sharing" className="btn-color">Certificado título</a>
                    </div>

                </div>
            </div>
        </section>
    )
}