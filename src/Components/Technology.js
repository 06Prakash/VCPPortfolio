import React from 'react';
import "./Css/Technology.css";

const Technology = () => (
    <section id="tech" className="colorlib-work technology-section" data-section="tech">
        <span className="heading-meta font-size-maintainer">Technologies</span>
        <div className="technology-container">
            <div className="section-header">
                <h2><b>SOFTWARE PROFICIENCY</b></h2>
            </div>
            <div className="proficiency-container">
                <div className="proficiency-item">
                    <h3>Technology</h3>
                    <ul>
                        <li>Ruby</li>
                        <li>Python</li>
                        <li>AWS</li>
                        <li>Azure</li>
                        <li>Docker</li>
                        <li>Jenkins</li>
                        <li>K8s</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div className="proficiency-item">
                    <h3>DataBases</h3>
                    <ul>
                        <li>mySQL</li>
                        <li>SQL</li>
                        <li>Oracle</li>
                    </ul>
                </div>
                <div className="proficiency-item">
                    <h3>Tools</h3>
                    <ul>
                        <li>Terraform</li>
                        <li>K9s</li>
                        <li>Docker Desktop</li>
                        <li>Podman</li>
                        <li>Github Desktop</li>
                        <li>Sequel Ace</li>
                        <li>Chatgpt</li>
                        <li>Copilot</li>
                        <li>Gemini</li>
                    </ul>
                </div>
            </div>
            <div className="section-header">
                <h2><b>Certifications</b></h2>
            </div>
            <div className="certifications-container">
                <ul>
                    <li>OCJP 6 : Oracle Java Professional 6 Certificate</li>
                    <li>IBM DB2 Academic Associate : DB2 Database and Application Fundamentals</li>
                    <li>Master Diploma In Computer Administration</li>
                    <li>Honours Diploma In Computer Hardware And Networking</li>
                </ul>
            </div>
        </div>
    </section>
);

export default Technology;
