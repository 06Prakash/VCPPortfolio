import React, { useState } from "react";
import ProjectData from "./../data/projectData.json";
import "./Css/Project.css";

const ProjectItem = ({ title, content, role, technology }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`project-item ${isOpen ? "open" : ""}`}>
            <div className="project-header" onClick={toggleAccordion}>
                <h3 className="project-title">{title}</h3>
                <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
            </div>
            {isOpen && (
                <div className="project-content">
                    <p>{content}</p>
                    <p><b>Role:</b> {role}</p>
                    <p><b>Technology:</b> {technology}</p>
                </div>
            )}
        </div>
    );
};

const Projects = () => (
    <div className="Container">
        <section className="colorlib-work" data-section="projects">
            <span className="heading-meta font-size-maintainer">Projects</span>
            {ProjectData.sort(({ id: previousID }, { id: currentID }) => currentID - previousID).map(record => (
                <ProjectItem
                    key={record.id}
                    title={record.title}
                    content={record.content}
                    role={record.role}
                    technology={record.technology}
                />
            ))}
        </section>
    </div>
);

export default Projects;
