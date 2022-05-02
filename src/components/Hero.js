import React from "react";
import laptop from '../images/laptop.svg'

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-logo">
                    <img id="hero-logo" src={laptop} alt="hero logo"/>
                </div>

                <div className="hero-text">
                    <p>
                        <strong>import</strong> slogan
                    </p>

                    <h1>Software<br />
                        Developer
                    </h1>

                    <div className="call-to-action">
                        <a id="mail-button" href="mailto:jaycedam@gmail.com" className="btn-light">
                            Contactar
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}