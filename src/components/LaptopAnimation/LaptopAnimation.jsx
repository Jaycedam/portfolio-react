import "./laptopAnimation.css";
import { motion } from "framer-motion";

const laptop = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
};

const screen = {
    hidden: {
        opacity: 0,
        scale: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            delay: .2,
            duration: .5,
            ease: "easeOut"
        }
    }
}

export default function LaptopSVG() {
    return (
        <motion.svg
            id="laptop-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="814" height="467.7"
            viewBox="0 0 814 467.7"
        >
            <g id="screen">
                <motion.path
                    variants={screen}
                    initial="hidden"
                    animate="visible"
                    d="M685.3,63.3A10.3,10.3,0,1,1,675.1,53,10.2,10.2,0,0,1,685.3,63.3Z" />

                <motion.path
                    variants={screen}
                    initial="hidden"
                    animate="visible"
                    d="M209,156.7H143.1a6.3,6.3,0,0,1-6.3-6.3v-8a6.3,6.3,0,0,1,6.3-6.3H209a6.3,6.3,0,0,1,6.3,6.3v8A6.3,6.3,0,0,1,209,156.7Z" />

                <motion.path
                    variants={screen}
                    initial="hidden"
                    animate="visible"
                    d="M263.1,156.7H231.2a6.3,6.3,0,0,1-6.3-6.3v-8a6.3,6.3,0,0,1,6.3-6.3h31.9a6.3,6.3,0,0,1,6.3,6.3v8A6.3,6.3,0,0,1,263.1,156.7Z" />

                <motion.path
                    variants={screen}
                    initial="hidden"
                    animate="visible"
                    d="M352.3,195.4H231.2a6.3,6.3,0,0,1-6.3-6.3v-8a6.3,6.3,0,0,1,6.3-6.3H352.3a6.3,6.3,0,0,1,6.3,6.3v8A6.3,6.3,0,0,1,352.3,195.4Z" />

                <motion.path
                    variants={screen}
                    initial="hidden"
                    animate="visible"
                    d="M577.6,195.4H375.1a6.3,6.3,0,0,1-6.3-6.3v-8a6.4,6.4,0,0,1,6.3-6.3H577.6a6.3,6.3,0,0,1,6.3,6.3v8A6.3,6.3,0,0,1,577.6,195.4Z" />

                <motion.path
                    variants={screen}
                    initial="hidden"
                    animate="visible"
                    d="M275.6,231.2H231.2a6.3,6.3,0,0,1-6.3-6.3V217a6.3,6.3,0,0,1,6.3-6.3h44.4a6.3,6.3,0,0,1,6.3,6.3v7.9A6.3,6.3,0,0,1,275.6,231.2Z" />

                <motion.path
                    variants={screen}
                    initial="hidden"
                    animate="visible"
                    d="M342.5,231.2H298.1a6.3,6.3,0,0,1-6.3-6.3V217a6.3,6.3,0,0,1,6.3-6.3h44.4a6.3,6.3,0,0,1,6.2,6.3v7.9A6.3,6.3,0,0,1,342.5,231.2Z" />

                <motion.path
                    variants={screen}
                    initial="hidden"
                    animate="visible"
                    d="M367.4,287.9H143.1a6.3,6.3,0,0,1-6.3-6.3v-8a6.3,6.3,0,0,1,6.3-6.3H367.4a6.3,6.3,0,0,1,6.2,6.3v8A6.3,6.3,0,0,1,367.4,287.9Z" />

                <motion.path
                    variants={screen}
                    initial="hidden"
                    animate="visible"
                    d="M390.3,321H231.6a6.3,6.3,0,0,1-6.3-6.3v-8a6.3,6.3,0,0,1,6.3-6.3H390.3a6.4,6.4,0,0,1,6.3,6.3v8A6.3,6.3,0,0,1,390.3,321Z" />

                <motion.path
                    variants={screen}
                    initial="hidden"
                    animate="visible"
                    d="M498.7,321H413.5a6.3,6.3,0,0,1-6.3-6.3v-8a6.3,6.3,0,0,1,6.3-6.3h85.2a6.3,6.3,0,0,1,6.3,6.3v8A6.3,6.3,0,0,1,498.7,321Z" />

                <motion.path
                    variants={screen}
                    initial="hidden"
                    animate="visible"
                    d="M252.7,357.4H231.2a6.3,6.3,0,0,1-6.3-6.3v-7.9a6.3,6.3,0,0,1,6.3-6.3h21.5a6.3,6.3,0,0,1,6.3,6.3v7.9A6.3,6.3,0,0,1,252.7,357.4Z" />

                <motion.path
                    variants={screen}
                    initial="hidden"
                    animate="visible"
                    d="M449.8,357.4H275.7a6.3,6.3,0,0,1-6.3-6.3v-7.9a6.3,6.3,0,0,1,6.3-6.3H449.8a6.3,6.3,0,0,1,6.3,6.3v7.9A6.3,6.3,0,0,1,449.8,357.4Z" />
            </g>
            <g id="device">
                <motion.path variants={laptop}
                    initial="hidden"
                    animate="visible"
                    d="M94.4,1h626a19.3,19.3,0,0,1,19.3,19.3v428a0,0,0,0,1,0,0H75.1a0,0,0,0,1,0,0V20.3A19.3,19.3,0,0,1,94.4,1Z"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2" />

                <motion.path
                    variants={laptop}
                    initial="hidden"
                    animate="visible"
                    d="M1,448.4v4.8H328.3a38.3,38.3,0,0,1,9.6,1.3l1.1.2v-6.3Z"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2" />

                <motion.path
                    variants={laptop}
                    initial="hidden"
                    animate="visible"
                    d="M475,448.4v6.3a19.9,19.9,0,0,1-4.2.4H343.3a20.2,20.2,0,0,1-4.3-.4v-6.3Z"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2" />

                <motion.path
                    variants={laptop}
                    initial="hidden"
                    animate="visible"
                    d="M330,453.2a52.7,52.7,0,0,1,9,1.5H475a77.6,77.6,0,0,1,8-1.5H812.4c.1,0,.1.2,0,.2a295.2,295.2,0,0,1-87.5,13.3H89.2A295.9,295.9,0,0,1,1.6,453.4c-.1,0-.1-.2.1-.2H330"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2" />

                <motion.path
                    variants={laptop}
                    initial="hidden"
                    animate="visible"
                    d="M813,448.4v4.8H485.7a39.6,39.6,0,0,0-9.6,1.3l-1.1.2v-6.3Z"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2" />
            </g>
        </motion.svg>
    )
}