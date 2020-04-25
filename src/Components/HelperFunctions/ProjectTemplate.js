import React from "react"

const ProjectTemplate = (props) => {
    return (<div>
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                            <div className="col-md-12">
                                <div className="about-desc"></div>
                                <h3>{props.Title}</h3>
                                <p>{props.Content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>);
}

export default ProjectTemplate;