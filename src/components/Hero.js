import React from "react";
import laptop from '../images/laptop.svg';

export default function Hero() {
    return (
        <section className="hero observer">
            <div className="container">
                <div className="hero-logo">
                    <img id="hero-logo" src={laptop} alt="hero logo" />
                </div>

                <div className="hero-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="580" height="261.98" viewBox="0 0 580 261.98">
                        <text id="text" transform="translate(33.27 117.82)" fontSize="92.55" fontFamily="Poppins-Black, Poppins" fontWeight="800" letterSpacing="0.1em">Software<tspan x="-33.27" y="86.12">Developer</tspan></text>
                        <g>
                            <text id="text" transform="translate(368.22 30.6)" fontSize="36" fontFamily="Poppins-Light, Poppins" fontWeight="300">.dev</text>
                            <text id="text-accent" transform="translate(139.82 30.6)" fontSize="36" fontFamily="Poppins-Light, Poppins" fontWeight="300">jordancortes</text>
                        </g>
                    </svg>



                    <div className="call-to-action">
                        <a id="mail-button" href="mailto:jaycedam@gmail.com" className="btn-color">
                            Contactar
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}