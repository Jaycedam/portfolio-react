import React from "react";
import image from "../images/hero-image.svg"

export default function About() {
    return (
        <section className="container pt-5 about" id="about">
            <div className="row">
                <div className="col-12 col-lg-3 image">
                    <img src={image} alt="about img" />
                </div>

                <div className="col-12 col-lg-9">
                    <h2 className="title">Acerca de</h2>
                    <p> Pellentesque nec nisl interdum, consectetur quam sodales, ultricies libero. Nunc nec sem nec est rutrum sodales.
                        Quisque est diam, dictum at suscipit eu, gravida quis felis. Duis mattis finibus lobortis.
                        Vivamus nec consequat nibh. Sed tincidunt nisl sit amet magna tincidunt porta. Vestibulum et nunc aliquet, vehicula enim nec,
                        tristique metus. Phasellus imperdiet eros at tellus vestibulum euismod. Morbi gravida lectus consequat orci lacinia accumsan.
                        Curabitur sit amet maximus urna. Morbi interdum turpis eu quam mattis tempus. Phasellus ut maximus lacus. Maecenas ante dui, ornare eget ultricies nec,
                        fringilla vel elit. Vestibulum diam mi, scelerisque sed fermentum in, maximus quis enim. Mauris lobortis lectus sem, in ornare quam sagittis eget. </p>
                </div>

            </div>

        </section>

    )
}