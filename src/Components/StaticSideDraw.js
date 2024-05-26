import React from 'react';
import "./Css/StaticSideDraw.css";
import { SocialIcon } from 'react-social-icons';
import { FaMailBulk } from "react-icons/fa";

const StaticSideDraw = () => (
    <div className="board">
        <div className="sidebarparent">
            <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
            <aside id="colorlib-aside" className="border js-fullheight main">
                <div className="text-center">
                    <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
                    <h1 id="colorlib-logo"><a href="#home">CHANDRA PRAKASH V</a></h1>
                    <span className="email"><FaMailBulk /> chandraprakashveluchamy@gmail.com</span>
                    <br></br>
                </div>
                <nav id="colorlib-main-menu" role="navigation" className="navbar">
                    <div id="navbar" className="collapse">
                        <ul>
                            <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                            <li><a href="#tech" data-nav-section="tech">Software Proficiency</a></li>
                            <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                            <li><a href="#keyskills" data-nav-section="keyskills">KeySkills</a></li>
                            <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="colorlib-footer">
                    <SocialIcon url="https://www.linkedin.com/in/vchandraprakash/" className="social-icon" />
                    <SocialIcon url="http://www.hackerearth.com/@chandraprakashveluchamy" className="social-icon" />
                    <p><small><i>Senior Software Engineer in Test, Instructor and Innovator</i></small></p>
                </div>
            </aside>
        </div>
    </div>
);

export default StaticSideDraw;
