import { useEffect } from "react";
import "./themetoggle.css"
import { BsCircleHalf } from "react-icons/bs"

export default function ThemeToggle() {

    useEffect(() => {
        // Dark mode toggle
        var toggle = document.getElementById("theme-toggle");

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
            <BsCircleHalf />
        </button>
    )
}