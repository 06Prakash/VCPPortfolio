import React from 'react';
const Timeline = () => (
    <div>
                <section className="colorlib-experience" data-section="timeline">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">highlights</span>
                                <h2 className="colorlib-heading animate-box">Timeline</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                     <SingleTimeLinebase
                                        color="timeline-icon color-1"
                                        pen="icon-pen2"
                                        title="Senior Software Engineer in Test - Fresh Works"
                                        timeSpan = "2020-Present"
                                        content="Currently working in manual testing, automation script development with ruby and selenium, Jenkins and Github for code version and build management, Demonstrated how to setup sonarqube code analysis for github PR decoration using Sonar cloud. Currently in the process of exploring the pain points will create many new opportunities for improving productivity and quality in my current organization."
                                     />
                                     <SingleTimeLinebase
                                        color="timeline-icon color-2"
                                        pen="icon-pen2"
                                        title="Senior Software Engineer in Test - Integra Connect"
                                        timeSpan = "2017-2020"
                                        content="I joined as SDET and got promoted to SDET-2. I worked in different projects like PMS, Oncology, Automation Testing & Performance Testing. Here I also developed lot of tools for reducing manual works and improved productivity."
                                     />
                                     <SingleTimeLinebase
                                        color="timeline-icon color-3"
                                        pen="icon-pen2"
                                        title="Software Engineer in Test - Athena Health Care"
                                        timeSpan = "2015-2017"
                                        content="In 2015, I joined as an intern for 3 months and after that I become a permanent employee. Here we worked in both manual and automation, used perl, ruby and java. Developed an ETL framework from scratch."
                                     />
                                    <SingleTimeLinebase
                                        color="timeline-icon color-4"
                                        pen="icon-pen2"
                                        title="Electro Technical Officer"
                                        timeSpan = "2014-2015"
                                        content="I worked as an Electro Technical Officer Training for Merchant Navy in Chief Ahmed Ship in Gulf region. Took care of navigation system and maintaining electrical sensors in ship."
                                     />
                                     <SingleTimeLinebase
                                        color="timeline-icon color-5"
                                        pen="icon-pen2"
                                        title="Electro Technical Officer Training"
                                        timeSpan = "2013-2014"
                                        content="I did my Electro Technical Officer Training for Merchant Navy in BP Marine Academy and stood first in the order of merit."
                                     />
                                     <SingleTimeLinebase
                                        color="timeline-icon color-6"
                                        pen="icon-study"
                                        title="BE graduation at KLNCE"
                                        timeSpan = "2009-2013"
                                        content="I did my BE-graduation studies with major in EEE (Electrical and Electronics Engineering) in KLN College of Engineering with University Rank Holding. I was an active participated in lot of programming related projects and competitions and also completed 3 diplomas in parallel with BE degree."
                                     />
                                     <SingleTimeLinebase
                                        color="timeline-icon color-1"
                                        pen="icon-study"
                                        title="Higher Secondary Education"
                                        timeSpan = "2007-2009"
                                        content="I have completed my higher secondary education with major subjects as Physics, Chemistry Maths & Biology with 92 percent."
                                     />
                                    <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-none">
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
);
const SingleTimeLinebase = (props) => {
    return(
        <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
            <div className="timeline-entry-inner">
                <div className={props.color}>
                    <i className={props.pen} />
                </div>
                <div className="timeline-label">
                    <h3>{props.title} <span>{props.timeSpan}</span></h3>
                    <p>{props.content}</p>
                </div>
            </div>
        </article>
    )
}

export default Timeline;