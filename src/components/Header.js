import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

function navToggle() {
    const primaryNav = document.querySelector(".primary-navigation");
    const visible = primaryNav.getAttribute("data-visible");

    if (visible === "false") {
        primaryNav.setAttribute("data-visible", "true")
    }
    else if (visible === "true") {
        primaryNav.setAttribute("data-visible", "false")
    }
}

export default function Navbar() {

    // useEffect(() => {
    //     const primaryNav = document.querySelector(".primary-navigation");
    //     const navLinks = document.querySelector(".nav-item");
    //     navLinks.addEventListener("click", () => {
    //         primaryNav.setAttribute("data-visible", "false")
    //     }, [])

    useEffect(() => {
        const primaryNav = document.querySelector(".primary-navigation");
        const navLinks = document.querySelectorAll(".nav-item");
        
        navLinks.forEach(link => link.addEventListener("click", () => {
            primaryNav.setAttribute("data-visible", "false")
        }))


        
    }, [])



    return (
        <header className="primary-header">
            <div className="logo">
                jordancortes<strong>.dev</strong>
            </div>

            <button onClick={navToggle} className="nav-toggle">
                <MdMenu />
            </button>


            <nav data-visible="false" className="primary-navigation">
                <ul>
                    <li className="nav-item">
                        <a href="#top">
                            Inicio
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#about">
                            Acerca
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#projects">
                            Proyectos
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#projects">
                            Tecnologías
                        </a>
                    </li>

                </ul>
            </nav>
        </header>

    )
}