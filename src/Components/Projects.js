import React from "react"
import ProjectTemplate from "./HelperFunctions/ProjectTemplate"
import "./Css/Project.css"
const Projects = () => (
    <div className="Container">
        <br />
        <br />
        <section className="colorlib-work" data-section="projects">
            <span className="heading-meta">Projects</span>
            <div className="image">
                <ProjectTemplate Title="Electronic Health Record – Oncology"
                    Content="Tested the workflows related to the cancer treatment including the way regimen and drug order allocation and discontinuing the medication course if needed.Tested for creating new regimen, approving process and authorization.Administration of drugs to the patient, generating the infusion notes and nurse template, verifying each and every one of the document for precise data.Found and reported lot of critical issues including UTC Time zone issues, wrong drug level population etc.Got appreciation from product owner, managers and developers for deep level testing and high level of understanding product in short time duration.">
                </ProjectTemplate>
            </div>
            <div className="image">
                <ProjectTemplate Title="Clinical – First Data Bank Integration"
                    Content="A part of Electronic health record, to integrate FDB to database for US healthcare CCD certification. Tested for the allergies and current medication interaction with the regimen and drug order. Checked for the levels of interaction alert and raised as well as suggested the areas where even product owners missed. Got appreciated from Director Technology for handling the product testing smoothly with less resources">
                </ProjectTemplate>
            </div>
            <div className="image">
                <ProjectTemplate Title="Electronic Health Record – Smart Scheduler"
                    Content="Appointment scheduler with lot of functions that improve user experience. Handled more than 90% of the entire product testing and raised more than 200+ bugs single handedly. In very short time, created metrics and updated the leadership. Got the whole QA Team attention and appreciation for handling more than 30+ tasks in a period of 10days when team member got relieved due to health reasons. Got appreciated from Director, Manager and product owners for keeping the testing and product stable even when there is a lot of changes in the team">
                </ProjectTemplate>
            </div>
            <div className="image">
                <ProjectTemplate Title="Dosage Team – Automation"
                    Content="Automated the hotfix related test cases, stable areas related test cases etc. Took more tasks and completed them before deadlines. Guided the team to follow the best coding and provided lot of code check guidelines for the team. Created lot of simple tools that simplifies and reduces the manual effort of the entire team and improved their quality time.">
                </ProjectTemplate>
            </div>
            <div className="image">
                <ProjectTemplate Title="Chrome response redirector for performance script development"
                    Content="Since chrome browser wont store response data for a long time, I created this one. This is a chrome extension that actually redirects the chrome response, form data, request headers of post method related pages to the console log and keeps it stored there. Created minor python scripts that actually operates and modify the data in clipboard, so jmeter can directly accept the paste operation in post parameter or headers related to the selected samplers.">
                </ProjectTemplate>
            </div>
            <div className="image">
                <ProjectTemplate Title="Chrome Memory Usage tracker"
                    Content="Created a window application that can read the memory usage of any chrome tab under test eg: Facebook, youtube or any product. This tool will keep on tracking the total amount of memory that particular tab is consuming. Integrated this application with window toaster notification functionality and capable of working in background from window notification area. Provided with on hover option on icon to see the current memory consumption and start, stop and exit option in both the context menu as well as in window area. We can provide the total amount of threshold from our side, it will alert the user with popup as well as toast notification when that tab exceeds the threshold memory">
                </ProjectTemplate>
            </div>
            <div className="image">
                <ProjectTemplate Title="Automation Master Run - Window service"
                    Content="Created a windows service from scratch that is capable of running automation run daily without any manual interventions. Installed the service to the RDP windows machine, made the service to be controlled from another remote DB like at what time it can run and where to store the data or we can start and stop the run as need. It also intelligently groups as well separate the list of test cases that are passed as well as failed in first run and rerun the failed case till the threshold times. This script drastically reduced manual work by listing out passed, failed and exempted cases for each runs and shooting out single mail to the entire QA team.">
                </ProjectTemplate>
            </div>
            <div className="image">
                <ProjectTemplate Title="Performance Framework runner script"
                    Content="Created a python script which is capable of running the script at a time with different loads of users. It is capable of supervising the jmeter  framework run and record errors in run and intelligently re-runs with same set of users if needed until it reaches the max threshold total runs. It also documents the data and group it according to the total users ran and product that got tested. This script drastically reduced manual work.">
                </ProjectTemplate>
            </div>
        </section>
    </div>
)

export default Projects;