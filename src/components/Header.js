import React, { useEffect } from "react";
import { MdMenu } from "react-icons/md";

function navToggle() {
    const nav = document.querySelector(".primary-header");
    const visible = nav.getAttribute("data-visible");

    if (visible === "false") {
        nav.setAttribute("data-visible", "true")
    }
    else if (visible === "true") {
        nav.setAttribute("data-visible", "false")
    }
}

export default function Navbar() {

    // Event to close navbar when a link is clicked
    useEffect(() => {
        const nav = document.querySelector(".primary-header");
        const navLinks = document.querySelectorAll(".nav-item");

        navLinks.forEach(link => link.addEventListener("click", () => {
            nav.setAttribute("data-visible", "false")
        }))
    }, [])



    return (
        <>
            <button onClick={navToggle} className="nav-toggle">
                <MdMenu />
            </button>

            <header className="primary-header" data-visible="false">
                <div className="logo">
                    jordancortes<strong>.dev</strong>
                </div>

                <nav className="primary-navigation">
                    <ul>
                        <li className="nav-item">
                            <a href="#top">
                                Inicio
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#projects">
                                Proyectos
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#about">
                                Acerca
                            </a>
                        </li>

                    </ul>
                </nav>
            </header>
        </>


    )
}