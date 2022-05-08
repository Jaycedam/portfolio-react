import React, { useState, useEffect } from "react";
import './assets/css/projects.css';
// import Button from "../Button/Button";
// import { FaGithub } from "react-icons/fa"
import Project from "./components/Project"

export default function Projects() {

    const [projects, setProjects] = useState([]);
    const url = "https://jordan-cortes-admin.herokuapp.com/api/v1/projects"

    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setProjects(responseJSON)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    const projectElements = projects.map(n => {
        return <Project key={n.id}
            imageUrl={n.imageUrl}
            name={n.name}
            about={n.about}
            url={n.url}
        />
        }
    );


    return (
        <section id="projects" className="projects-section observer">

            <div className="container">


                <h2>Proyectos destacados</h2>

                <div className="project-list">
                    {projectElements}
                </div>

                {/* Card carousel */}
                {/* <Swiper
                    modules={[Navigation, Autoplay]}
                    effect={"cards"}
                    grabCursor={true}
                    spaceBetween={20}
                    slidesPerView={1.1}
                    navigation={true}
                    centeredSlides
                    breakpoints={{
                        // when window width is >= 600px
                        600: {
                            slidesPerView: 2.1,
                            centeredSlides: false
                        },
                        // when window width is >= 992px
                        900: {
                            slidesPerView: 3.1,
                            centeredSlides: false
                        }
                    }}
                >

                    {projects.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="project"
                            >
                                <div className="image">
                                    <img src={item.imageUrl} alt="" />
                                </div>

                                <div className="text">
                                    <h3>{item.name}</h3>
                                    <p>{item.about}</p>
                                    <Button
                                        link={item.url}
                                        text="GitHub"
                                        type="btn"
                                        icon={<FaGithub />}
                                    />
                                </div>


                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper> */}
            </div>
        </section>
    )
}