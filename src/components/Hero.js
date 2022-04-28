import React from "react";
import abstract from '../images/abstract.svg'
import { VscBracketDot } from 'react-icons/vsc';
import { BsCaretDown } from 'react-icons/bs'

export default function Hero() {
    return (
        <div id="home" className="container-fluid px-8 py-5 hero">

            <div className="row align-items-center content">
                <div className="col-lg-6 px-5">
                    <h1>Software<br />Developer <strong className="title-icon"><VscBracketDot /></strong></h1>
                    <p className="lead">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis ac lectus vitae tempor. Vivamus vel nulla mi. Aenean eu.</p>
                    <div className="flex justify-content-start">
                        <a href="mailto:jaycedam@gmail.com" className="btn btn-outline-dark btn-lg">
                            Contactar
                        </a>
                    </div>
                </div>

                <div className="col-lg-6 hero-image-container">
                    <img src={abstract} alt="" className="hero-image" />
                </div>
            </div>

            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h5 className="arrow-down">
                        <BsCaretDown />
                    </h5>
                </div>

            </div>
        </div>
    )
}