import React, { useEffect } from "react";
import { MdMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import './assets/css/navbar.css';
import ThemeToggle from "../ThemeToggle/ThemeToggle"
import { motion } from "framer-motion";
import {MdEmail} from "react-icons/md";
import Button from "../Button/Button";

// enamble/disable navbar on mobile when toggled
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
            {/* Menu btn to toggle navbar on mobile */}
            <button onClick={navToggle} className="nav-toggle">
                <span id="menuicon" className="menuicon"><MdMenu /></span>
                <span id="closeicon" className="closeicon"><AiOutlineClose /></span>
            </button>

            {/* Mail btn on mobile */}
            <motion.div
                className="mail-btn-mobile" 
                initial={{ 
                    scale: 0,
                    opacity: 0
                }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay:3, 
                        type: "spring",
                    }
                }}
            >
                <a 
                    href="mailto:jaycedam@gmail.com">{<MdEmail />}</a>
            </motion.div>

            <header className="primary-header" data-visible="false">
                <div className="logo">
                    {/* <img src={logo} alt="logo"/> */}
                    <strong>LOGO</strong>
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
                            <ThemeToggle />
                        </li>

                        <li className="nav-item mail-btn-desktop">
                            <Button
                                text="Contactar"
                                link="mailto:jaycedam@gmail.com"
                                type="btn-color"
                                icon={<MdEmail/>}
                            />
                        </li>

                    </ul>
                </nav>
            </header>
        </>
    )
}