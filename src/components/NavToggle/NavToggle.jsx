import { useEffect } from "react";
import "./navToggle.css";

// enamble/disable navbar on mobile when toggled
function navToggle() {
    const nav = document.querySelector(".primary-header");
    const visible = nav.getAttribute("data-visible");
    const toggle = document.querySelector(".nav-toggle");

    if (visible === "false") {
        nav.setAttribute("data-visible", "true");
        toggle.classList.add('nav-toggle-active');

    }
    else if (visible === "true") {
        nav.setAttribute("data-visible", "false");
        toggle.classList.remove('nav-toggle-active');
    }
}

export default function NavToggle() {
     // Event to close navbar when a link is clicked
     useEffect(() => {
        // Click on link closes nav
        const nav = document.querySelector(".primary-header");
        const navLinks = document.querySelectorAll(".nav-item");
        const toggle = document.querySelector(".nav-toggle");

        navLinks.forEach(link => link.addEventListener("click", () => {
            nav.setAttribute("data-visible", "false");
            // removes class active from toggle
            toggle.classList.remove('nav-toggle-active');
        }))
    }, [])

    return (
        <button onClick={navToggle} className="nav-toggle" id="nav-toggle"><span></span></button>
    )
}