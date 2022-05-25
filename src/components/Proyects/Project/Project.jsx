import "./project.css"
import Button from "../../Button/Button";
import { motion } from "framer-motion";
import { AiOutlineLink } from "react-icons/ai"

// animation for framer motion
const project = {
    hidden: {
        y: 50,
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
            key={props.id}
            variants={project}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            className="project"
            id="project"
        >
            <div className="image">
                <motion.img
                    whileHover={{ scale: 1.4 }}
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
                <h5><strong>{props.technology}</strong></h5>
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