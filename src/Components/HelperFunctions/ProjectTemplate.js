import React from "react"
import "./../Css/ProjectTemplate.css"

const ProjectTemplate = (props) => {
    return (<div>
        <div className="colorlib-narrow-content block-shadow">
            <div className="row">
                <div className="col-md-12">
                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                        <div className="col-md-12">
                            <div className="about-desc"></div>
                            <h3 className="title-span"><u>{props.Title}</u></h3>
                            <p className="content-span">{props.Content}</p>
                            <div className="container_grid">
                                <div className="Alignment_left"><p><b>Role:</b> {props.Role}</p></div>
                                <div  className="Alignment_right"><p><b>Technology: </b>{props.Technology}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default ProjectTemplate;