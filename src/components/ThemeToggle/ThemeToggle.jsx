import React, { useEffect} from "react";
import "./css/themetoggle.css"
import {BsCircleHalf} from "react-icons/bs"

export default function ThemeToggle() {

    useEffect(() => {
        // Dark mode toggle
        var toggle = document.getElementById("theme-toggle");

        // get system theme or override from user in local storage
        var storedTheme = localStorage.getItem('theme') 
            || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
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

    }, [])

    return (
        <button id="theme-toggle">
            <BsCircleHalf/>
        </button>
    )
}