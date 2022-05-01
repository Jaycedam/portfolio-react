import React from "react";
import { FaPython, FaJava, FaReact, FaBootstrap } from "react-icons/fa"
import { SiCsharp, SiSpring, SiOracle, SiPostgresql } from "react-icons/si"
import { DiDjango } from "react-icons/di"

export default function Technologies() {
    return (
        <section id="technologies" className="technologies-section">
            <div className="container">
                <h2>Conocimientos</h2>
                <div className="technology-list">
                    <div className="technology">
                        <FaPython />
                        <p>Python</p>
                    </div>

                    <div className="technology">
                        <FaJava />
                        <p>Java</p>
                    </div>

                    <div className="technology">
                        <SiCsharp />
                        <p>C#</p>
                    </div>

                    <div className="technology">
                        <DiDjango />
                        <p>Django</p>
                    </div>

                    <div className="technology">
                        <FaReact />
                        <p>React</p>
                    </div>

                    <div className="technology">
                        <SiSpring />
                        <p>Spring Boot</p>
                    </div>

                    <div className="technology">
                        <FaBootstrap />
                        <p>Bootstrap</p>
                    </div>

                    <div className="technology">
                        <SiOracle />
                        <p>Oracle SQL</p>
                    </div>

                    <div className="technology">
                        <SiPostgresql />
                        <p>PostgreSQL</p>
                    </div>
                </div>
            </div>

        </section>
    )
}