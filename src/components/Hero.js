import React from "react";
import laptop from '../images/laptop.svg';
import herotext from "../images/herotext.svg"

export default function Hero() {
    return (
        <section className="hero observer">
            <div className="container">
                <div className="hero-logo">
                    <img id="hero-logo" src={laptop} alt="hero logo"/>
                </div>

                <div className="hero-text">
                    <img src={herotext} alt="Software Developer"/>

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