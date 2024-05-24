import React from "react";
import "./portfolio.css";
import turizm from "../../assets/turizm.jpg";
import fight from "../../assets/fight.jpg";
import todo from "../../assets/to-do.jpg";

const Portfolio = () => {
    const projects = [
        {
            name: "Проект для туристов",
            image: turizm,
            technologies: "React, Bootstrap, CSS, HTML"
        },
        {
            name: "Галерея стилей",
            image: fight,
            technologies: "Bootstrap, CSS, HTML"
        },
        {
            name: "Список задач",
            image: todo,
            technologies: "React, CSS, HTML"
        }
    ];

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Портфолио</h2>
            <span className="section__subtitle">Мои работы</span>
            <div className="portfolio__container container grid">
                {projects.map((project, index) => (
                    <div key={index} className="portfolio__item">
                        <img src={project.image} alt={project.name} className="portfolio__img"/>
                        <h3 className="portfolio__item-title">{project.name}</h3>
                        <span className="portfolio__item-detail">{project.technologies}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
