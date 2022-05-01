import React from "react";
import abstract from '../images/abstract.svg'

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-logo">
                    <img src={abstract} alt="logo" />
                </div>

                <div className="hero-text">
                    <p>
                        <strong>import</strong> slogan
                    </p>

                    <h1>Software<br />
                        Developer
                    </h1>

                    <div className="call-to-action">
                        <a href="mailto:jaycedam@gmail.com" className="btn-color">
                            Contactar
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}