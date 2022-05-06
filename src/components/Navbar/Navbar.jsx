import React, { useEffect } from "react";
import { MdMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import './assets/css/navbar.css';
import ThemeToggle from "../ThemeToggle/ThemeToggle"

function navToggle() {
    const nav = document.querySelector(".primary-header");
    const visible = nav.getAttribute("data-visible");
    const menuicon = document.getElementById("menuicon")
    const closeicon = document.getElementById("closeicon")

    if (visible === "false") {
        nav.setAttribute("data-visible", "true")
        closeicon.style.display = "flex"
        menuicon.style.display = "none"

    }
    else if (visible === "true") {
        nav.setAttribute("data-visible", "false")
        closeicon.style.display = "none"
        menuicon.style.display = "flex"
    }
}

export default function Navbar() {

    // Event to close navbar when a link is clicked
    useEffect(() => {

        // Click on link closes nav
        const nav = document.querySelector(".primary-header");
        const navLinks = document.querySelectorAll(".nav-item");
        const menuicon = document.getElementById("menuicon")
        const closeicon = document.getElementById("closeicon")

        navLinks.forEach(link => link.addEventListener("click", () => {
            nav.setAttribute("data-visible", "false")
            closeicon.style.display = "none"
            menuicon.style.display = "flex"
        }))
    }, [])

    return (
        <>
            <button onClick={navToggle} className="nav-toggle">
                <span id="menuicon" className="menuicon"><MdMenu /></span>
                <span id="closeicon" className="closeicon"><AiOutlineClose /></span>
            </button>

            <header className="primary-header" data-visible="false">
                <div className="logo">
                    {/* <img src={logo} alt="logo"/> */}
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

                        <li className="nav-item">
                            <a href="https://github.com/Jaycedam">
                                GitHub
                            </a>
                        </li>

                        <li className="nav-item">
                            <ThemeToggle/>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}