import React, { useEffect } from "react";
import { MdMenu, MdDarkMode, MdLightMode } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
// import logo from "../images/logo.svg"

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
        // Dark mode toggle
        var toggle = document.getElementById("theme-toggle");

        var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        if (storedTheme)
            document.documentElement.setAttribute('data-theme', storedTheme)


        toggle.onclick = function () {
            var currentTheme = document.documentElement.getAttribute("data-theme");
            var targetTheme = "light";

            if (currentTheme === "light") {
                targetTheme = "dark";
            }

            document.documentElement.setAttribute('data-theme', targetTheme)
            localStorage.setItem('theme', targetTheme);
        };



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
                            <button id="theme-toggle" className="theme-toggle" type="button">
                                <span className="d-block-light"><MdDarkMode /></span>
                                <span className="d-block-dark"><MdLightMode /></span>
                            </button>

                        </li>

                    </ul>
                </nav>
            </header>
        </>


    )
}