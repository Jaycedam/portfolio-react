import React from "react";
import "./assets/css/project.css"
import Button from "../../Button/Button";
import { motion } from "framer-motion";
import {AiOutlineLink} from "react-icons/ai"

// animation for project (framer motion)
const project = {
    hidden: {
        y: 30,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: .5,
            duration: 1,
        }
    }
}

export default function Project(props) {
    return (
        <motion.div
            variants={project}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            className="project"
        >
            <div className="image">
                <img src={props.imageUrl} alt="Project" />
            </div>

            <div className="text">
                <h3>{props.name}</h3>
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
                    icon={<AiOutlineLink/>}
                />
            </div>
        </motion.div>
    )
}