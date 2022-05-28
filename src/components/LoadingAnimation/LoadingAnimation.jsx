import "./loadingAnimation.css";
import { motion } from "framer-motion";

export default function LoadingIcon() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="load">
            <div className="load-one"></div>
            <div className="load-two"></div>
            <div className="load-three"></div>
        </motion.div>
    )
}