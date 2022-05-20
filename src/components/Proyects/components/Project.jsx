import React from "react";
import "./assets/css/project.css"
import Button from "../../Button/Button";
import { motion } from "framer-motion";
import { AiOutlineLink } from "react-icons/ai"

// animation for project (framer motion)
const variant = {
    hidden: {
        y: 30,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: .3,
            duration: .8,
        }
    }
}

export default function Project(props) {
    return (
        <motion.div
            key={props.id}
            variants={variant}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            className="project"
            id="project"
        >
            <div className="image">
                <motion.img
                    whileHover={{ scale: 1.2 }}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 120
                    }}
                    src={props.imageUrl} alt="Project"
                />
            </div>

            <div className="text">
                <h3>{props.name} - {props.area}</h3>
                {/* if the prop is passed, show, else null */}
                {props.technology ? (
                    <h5><strong>{props.technology}</strong></h5>
                ) : (
                    null
                )}

                <p>{props.about}</p>
                <Button
                    text="Link"
                    type="btn"
                    link={props.url}
                    icon={<AiOutlineLink />}
                />
            </div>
        </motion.div>
    )
}