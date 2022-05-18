import React from "react";
import "./assets/css/button.css"
import { motion } from "framer-motion";

// Button Types: "btn", "btn-color", "btn-light"
export default function Button(props) {
    return (
        <motion.div
            className="btn-container"
            whileHover={{ scale: 1.1 }}
            whileTap={{
                scale: 0.8,
                borderRadius: "100%"
            }}
        >
            <a className={props.type} href={props.link}>{props.text}&nbsp;{props.icon}</a>
        </motion.div>
    )
}