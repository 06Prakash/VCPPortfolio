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
                    <h3>DataBases</h3>
                    <ul>
                        <li>SQL</li>
                        <li>mySQL</li>
                        <li>Oracle</li>
                    </ul>
                </div>
                <div className="proficiency-item">
                    <h3>Technology</h3>
                    <ul>
                        <li>Ruby</li>
                        <li>Python</li>
                        <li>AWS</li>
                        <li>Docker</li>
                        <li>C#</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>Gdscript</li>
                    </ul>
                </div>
                <div className="proficiency-item">
                    <h3>Tools</h3>
                    <ul>
                        <li>Eclipse</li>
                        <li>Visual Studio & VS Code</li>
                        <li>Android Studio</li>
                        <li>Jmeter</li>
                        <li>Godot</li>
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
