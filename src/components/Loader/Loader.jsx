import "./loader.css";
import { useEffect } from "react";
import { motion } from "framer-motion";

const variant = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            type: "spring",
        }
    },
    exit: {
        opacity: 0,
        y: -100,
        transition: {
            duration: 1,
        }
    }
}

export default function Loader({ setLoading }) {
    useEffect(() => {
        // get and apply system theme or override from user in local storage
        var storedTheme = localStorage.getItem('theme')
            || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        if (storedTheme)
            document.documentElement.setAttribute('data-theme', storedTheme)
    }, [])

    return (
        <motion.div
            variants={variant}
            initial="hidden"
            animate="visible"
            exit="exit"
            onAnimationComplete={() => setLoading(false)}
            className="loader-container">
            <h1>Hello, World.</h1>
        </motion.div>
    )
}