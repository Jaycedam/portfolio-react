import React from "react";
import image from "../images/hero-image.svg"

export default function About() {
    return (

        <section id="about" className="about-container">
            <div className="image">
                <img src={image} alt="about img" />
            </div>

            <div className="text">
                <h2>Acerca de</h2>
                <p>
                    Pellentesque nec nisl interdum, consectetur quam sodales, ultricies libero. Nunc nec sem nec est rutrum sodales.
                    Quisque est diam, dictum at suscipit eu, gravida quis felis. Duis mattis finibus lobortis.
                </p>
            </div>
        </section>
    )
}