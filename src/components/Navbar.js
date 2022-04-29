import React from "react";
import { FaGithub } from "react-icons/fa"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#home">jordancortes<strong>.dev</strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">Acerca</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Proyectos</a>
                        </li>
                       
                    </ul>
                    <span className="navbar-text">
                        <a href="https://github.com/Jaycedam">
                            GitHub
                            <FaGithub className="github-icon" />
                        </a>
                    </span>
                </div>
            </div>
        </nav>
    )
}