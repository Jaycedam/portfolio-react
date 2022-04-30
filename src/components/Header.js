import React from "react";

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

                </ul>
            </nav>
        </header>

    )
}