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
                            INICIO
                        </a>
                    </li>

                    <li>
                        <a href="#about">
                            ACERCA
                        </a>
                    </li>

                    <li>
                        <a href="#projects">
                            PROYECTOS <FaGithub/>
                        </a>
                    </li>

                </ul>
            </nav>
        </header>

    )
}