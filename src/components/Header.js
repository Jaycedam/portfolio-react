import React from "react";
import { FaGithub } from "react-icons/fa"

export default function Navbar() {
    return (
        <header className="primary-header">
            <div className="logo">
                jordancortes<strong>.dev</strong>
            </div>

            <nav>
                <ul className="primary-navigation">
                    <li>
                        <a href="#top">
                            Inicio
                        </a>
                    </li>

                    <li>
                        <a href="#about">
                            Acerca
                        </a>
                    </li>

                    <li>
                        <a href="#projects">
                            Proyectos
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/Jaycedam">
                            <FaGithub/>
                        </a>
                    </li>

                </ul>
            </nav>
        </header>

    )
}