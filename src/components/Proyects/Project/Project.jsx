import "./project.css";
import { motion } from "framer-motion";

// animation for framer motion
const project = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Project(props) {
  console.log(props);
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
        <a href={props.url} target="_blank" rel="noreferrer">
          <motion.img
            whileHover={{ scale: 1.4 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 120,
            }}
            src={props.imageurl}
            alt="Project"
          />
        </a>

        <div className="overlay">
          <h3>{props.name}</h3>
        </div>
      </div>
    </motion.div>
  );
}
