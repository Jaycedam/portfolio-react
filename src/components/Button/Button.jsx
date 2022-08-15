import "./button.css"
import { motion } from "framer-motion";

const btn = {
    hidden: {
        scale: 0
    },
    visible: {
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 250,
            damping: 30,
            delay: .8,
            duration: .5,
        }
    }
}

// Button Types: "btn", "btn-color", "btn-light"
export default function Button(props) {
    return (
        <motion.div
            variants={btn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="btn-animation"
        >
            <motion.div
                className="btn-container"
                whileHover={{ scale: 1.2 }}
                whileTap={{
                    scale: 0.8,
                    borderRadius: "100%"
                }}
            >
                <a className={props.type} href={props.link}>{props.text}&nbsp;{props.icon}</a>
            </motion.div>
        </motion.div>

    )
}