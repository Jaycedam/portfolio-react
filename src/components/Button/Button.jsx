import React from "react";
import "./assets/css/button.css"
import { motion } from "framer-motion";

const variant = {
    hidden: {
        scale: 0
    },
    visible: {
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: .8
        }
    }
}

// Button Types: "btn", "btn-color", "btn-light"
export default function Button(props) {
    return (
        <motion.div
            className="btn-section"
            variants={variant}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
        >
            <motion.div
                className="btn-container"
                whileHover={{ scale: 1.2 }}
                whileTap={{
                    scale: 0.8,
                    borderRadius: "100%"
                }}
            >
                <a className={props.type} href={props.link}>{props.text} {props.icon}</a>
            </motion.div>
        </motion.div>
    )
}