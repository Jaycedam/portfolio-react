import React from "react";
import Navbar from "./Navbar"
import abstract from '../images/abstract.svg'
import { VscBracketDot, VscMail } from 'react-icons/vsc';

export default function Hero() {
    return (
        <div className="container-fluid hero">
            <Navbar/>

            <div className="row content">
                <div className="col-12 col-lg-6">
                    <h1>Analista<br />Programador <strong className="title-icon"><VscBracketDot /></strong></h1>
                    <p className="lead">
                        Portafolio construído con React, Bootstrap, Java Spring Boot y PostgreSQL. Diseño responsivo, dark mode automático, API fetch para proyectos. 
                        
                        </p>
                    <div className="flex justify-content-start">
                        <a href="mailto:jaycedam@gmail.com" className="btn btn-outline-light mail-btn">
                            <h2><VscMail/></h2>
                        </a>
                    </div>
                </div>

                <div className="col-12 col-lg-6 hero-image-container">
                    <img src={abstract} alt="" className="hero-image" />
                </div>
            </div>

        </div>
    )
}