import React from "react";
import { VscBracketDot } from 'react-icons/vsc';
import abstract from '../images/abstract.svg'
import { FaHandPointDown } from "react-icons/fa"
export default function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-logo">
                <img src={abstract} alt="logo" />
            </div>

            <div className="hero-text">
                <p>jordancortes
                    <strong>.dev</strong>
                </p>

                <h1>Software<br />
                    Developer <strong><VscBracketDot /></strong>
                </h1>

            </div>

            <div className="call-to-action">
                <a href="mailto:jaycedam@gmail.com" className="btn-dark">
                    Contactar
                </a>

            </div>

            <div className="icon-down">
                <FaHandPointDown />
            </div>
        </div>
    )
}