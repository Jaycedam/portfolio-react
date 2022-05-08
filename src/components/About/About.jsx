import React from "react";
// import image from "./assets/images/circles.svg"
import './assets/css/about.css';
import Button from "../Button/Button";
import {GrMail} from "react-icons/gr"

export default function About() {
    return (

        <section id="about" className="about-section observer">

            <div className="container">
                <div className="image">
                    {/* <img src="" alt="PLACEHOLDER" /> */}
                </div>

                <div className="text">
                    <h2>Acerca de mí</h2>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>

                    <br />

                    <div className="call-to-action">
                        <Button
                            link= "#soon"
                            text= "CV"
                            type="btn"
                        />
                        <Button
                            link= "mailto:jaycedam@gmail.com"
                            text= "Contactar"
                            type="btn-color"
                            icon={<GrMail/>}
                        />
                    </div>

                </div>
            </div>

        </section>
    )
}