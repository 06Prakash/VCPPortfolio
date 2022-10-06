import React from "react"
import ProjectTemplate from "./HelperFunctions/ProjectTemplate"
import ProjectData from "./projectData.json"
import "./Css/Project.css"

const Projects = () => (
    <div className="Container">
        <br />
        <br />
        <section className="colorlib-work" data-section="projects">
            <span className="heading-meta font-size-maintainer">Projects</span>
            {
                ProjectData.sort(({ id: previousID }, { id: currentID }) =>  currentID - previousID)
                .map( record => {
                    return(
                        <div className="image" key= { record.id }>
                            <ProjectTemplate Title= { record.title }
                                Content={record.content }
                                Role={ record.role }
                                Technology={ record.technology }>
                            </ProjectTemplate>
                        </div>
                    )
                })
            }
        </section>
    </div>
)

export default Projects;