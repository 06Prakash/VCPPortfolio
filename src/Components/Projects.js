import React from "react"
import ProjectTemplate from "./HelperFunctions/ProjectTemplate"
import "./Css/Project.css"
const Projects = () => (
    <div className="Container">
        <br />
        <br />
        <section className="colorlib-work" data-section="projects">
            <span className="heading-meta font-size-maintainer">Projects</span>
            <div className="image">
                <ProjectTemplate Title="Freshworks Automation Works"
                    Content="Automated the job boards project, account downgrade and upgrade process, location based hierarchy system automation are all automated from scratch. Also improved the existing automation function in the framework. Provided a lot of sessions  to improve the automation stability improvement and proper structuring of the test cases for easy scalability and trouble shooting in the future."
                    Role="Automation Developer"
                    Technology="Selenium, Rspec, Ruby">
                </ProjectTemplate>
            </div>
            <div className="image">
                <ProjectTemplate Title="Job Boards Integration"
                    Content="This project is mainly focused on publishing the jobs to different available job boards including the job sponsoring, cancelling or pausing the job boards publications as and when needed. Tested areas related to republishing the job when needed and improving or closing the sponsorship for the job."
                    Role="Manual Tester, white box tester, Automation developer"
                    Technology="Ruby on rails, Ember js, Ruby, Rspec">
                </ProjectTemplate>
            </div>
            <div className="image">
                <ProjectTemplate Title="Applicant Tracking System"
                    Content="This project is focused on the Applicants tracking system in any organization from Candidate applying to the job or candidate getting referred for the job stage to the completion of onboarding process. Tested each and every area from resume parsing to work checklists for every hiring manager, recruiters and Human resource and their related functionalities."
                    Role="Manual Tester"
                    Technology="Ruby on rails, Ember js">
                </ProjectTemplate>
            </div>
            <div className="image">
                <ProjectTemplate Title="Electronic Health Record – Oncology"
                    Content="Tested the workflows related to the cancer treatment including the medication course allocation and discontinuing them as needed.Tested each and every area for precise information.Found and reported lot of critical issues including patient safety issues, Time zone issues etc.Got appreciation from product owner, managers and developers for deep level testing and high level of understanding product in short time duration."
                    Role="Manual Tester"
                    Technology="C#, JavaScript">
                </ProjectTemplate>
            </div>
            <div className="image">
                <ProjectTemplate Title="Integrating EHR with Secured Medical database"
                    Content="A part of Electronic health record Team work, to integrate big knowledge source for product improvement. Tested for the various workflows that alerts the medical practitioners about people health conditions. Checked for the levels of interaction alert and raised as well as suggested the areas where even product owners missed. Got appreciated from Director Technology for handling the product testing smoothly with less resources"
                    Role="Manual Tester"
                    Technology="C#, JavaScript">
                </ProjectTemplate>
            </div>
            <div className="image">
                <ProjectTemplate Title="Scheduling process Improvement"
                    Content="Appointment scheduler with lot of functions that improve user experience. Handled more than 90% of the entire product testing and raised more than 200+ bugs single handedly. In very short time, created metrics and updated the leadership. Got the whole QA Team attention and appreciation for handling more than 30+ tasks in a period of 10days when team member got relieved due to health reasons. Got appreciated from Director, Manager and product owners for keeping the testing and product stable even when there is a lot of changes in the team"
                    Role="Manual Tester"
                    Technology="C#, JavaScript">
                </ProjectTemplate>
            </div>
            <div className="image">
                <ProjectTemplate Title="Automation Works"
                    Content="Automated the hotfix related test cases, stable areas related test cases etc. Took more tasks and completed them before deadlines. Guided the team to follow the best coding and provided lot of code check guidelines for the team. Created lot of simple tools that simplifies and reduces the manual effort of the entire team and improved their quality time."
                    Role="Automation Developer"
                    Technology="C#, JavaScript">
                </ProjectTemplate>
            </div>
            <div className="image">
                <ProjectTemplate Title="Chrome response redirector for performance script development"
                    Content="Since chrome browser wont store response data for a long time, I created this one. This is a chrome extension that actually redirects the chrome response, form data, request headers of post method related pages to the console log and keeps it stored there. Created minor python scripts that actually operates and modify the data in clipboard, so jmeter can directly accept the paste operation in post parameter or headers related to the selected samplers."
                    Role="Product Owner and Developer"
                    Technology="C#, JavaScript">
                </ProjectTemplate>
            </div>
            <div className="image">
                <ProjectTemplate Title="IC-EHR-Navigations"
                    Content="Created a product that helps in finding as well as documenting the existing navigations in our product page. This initiative is to reduce the meeting time to know about page navigations for Dev, QA and PO, By which they can spend their quality time for improving productivity."
                    Role="Developer and Tester"
                    Technology="C#, Entity Framework, SQL Server, ASP.net MVC framework">
                </ProjectTemplate>
            </div>
            <div className="image">
                <ProjectTemplate Title="Chrome Memory Usage tracker"
                    Content="Created a window application that can read the memory usage of any chrome tab under test eg: Facebook, youtube or any product. This tool will keep on tracking the total amount of memory that particular tab is consuming. Integrated this application with window toaster notification functionality and capable of working in background from window notification area. Provided with on hover option on icon to see the current memory consumption and start, stop and exit option in both the context menu as well as in window area. We can provide the total amount of threshold from our side, it will alert the user with popup as well as toast notification when that tab exceeds the threshold memory"
                    Role="Product Owner and Developer"
                    Technology="C#">
                </ProjectTemplate>
            </div>
            <div className="image">
                <ProjectTemplate Title="Automation Master Run - Window service"
                    Content="Created a windows service from scratch that is capable of running automation run daily without any manual interventions. Installed the service to the RDP windows machine, made the service to be controlled from another remote DB like at what time it can run and where to store the data or we can start and stop the run as need. It also intelligently groups as well separate the list of test cases that are passed as well as failed in first run and rerun the failed case till the threshold times. This script drastically reduced manual work by listing out passed, failed and exempted cases for each runs and shooting out single mail to the entire QA team."
                    Role="Developer"
                    Technology="C#, SQL Server">
                </ProjectTemplate>
            </div>
            <div className="image">
                <ProjectTemplate Title="Runner script for Performance"
                    Content="Created a python script which is capable of running the script at a time with different loads of users. It is capable of supervising the jmeter  framework run and record errors in run and intelligently re-runs with same set of users if needed until it reaches the max threshold total runs. It also documents the data and group it according to the total users ran and product that got tested. This script drastically reduced manual work."
                    Role="Developer"
                    Technology="Python, Jmeter">
                </ProjectTemplate>
            </div>
            <div className="image">
                <ProjectTemplate Title="Performance Framework Development"
                    Content="Created a python script. Created Hybrid framework with both modular and data driven model from scratch. Developed page related functions with proper mappings of different controller, samplers, Post and pre processing scripts. Made the framework to support 300+ number of users stress at a time(Product needs to support only max of 300 users stress). Made the frame work capable of performing load test, stress test and soak test."
                    Role="Developer"
                    Technology="Jmeter">
                </ProjectTemplate>
            </div>
        </section>
    </div>
)

export default Projects;