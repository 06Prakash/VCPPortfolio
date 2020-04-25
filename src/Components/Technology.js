import React from 'react';
import "./Css/Technology.css"
const Technology = () => (
    <section className="colorlib-work" data-section="tech" style={{ marginLeft: "10%" }}>
        <div className="first_div">
            <h2><b>SOFTWARE PROFICIENCY</b></h2>

            <div style={{ display: "inline-block", boxShadow: "0 1px 10px", width: "20%", margin: "10px 10px 10px 10px" }}>
                <h3>DataBases</h3>
                <ul>
                    <li>SQL</li>
                    <li>Oracle</li>
                </ul>
            </div>

            <div style={{ display: "inline-block", boxShadow: "0 1px 10px", width: "20%", margin: "10px 10px 10px 10px" }}>
                <h3>Languages</h3>
                <ul>
                    <li>C#</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>python</li>
                    <li>Gdscript</li>
                </ul>
            </div>

            <div style={{ display: "inline-block", boxShadow: "0 1px 10px", width: "20%", margin: "10px 10px 10px 10px" }}>
                <h3>Tools</h3>
                <ul>
                    <li>Eclipse</li>
                    <li>Visual Studio</li>
                    <li>Brackets</li>
                    <li>Sublime Text editor</li>
                    <li>Android Studio</li>
                    <li>Jmeter</li>
                </ul>
            </div>
                <h2 style={{marginTop: "20px", marginLeft: "5%"}}><b>Certifications</b></h2>
            <div style={{ display: "block", boxShadow: "0 1px 10px", width: "65%", margin: "10px 10px 10px 10px" }}>
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