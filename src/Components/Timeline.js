import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faClipboardCheck, faServer, faShip, faGraduationCap, faHighlighter } from '@fortawesome/free-solid-svg-icons';
import timelineData from './../data/timelineData.json'; // Adjust the path as necessary
import './Css/Timeline.css';

const Timeline = () => (
    <div>
        <section className="colorlib-experience" data-section="timeline">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Timeline</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="timeline-centered">
                            {timelineData.map((item, index) => (
                                <SingleTimeLinebase
                                    key={index}
                                    color={item.color}
                                    icon={getIcon(item.icon)}
                                    title={item.title}
                                    timeSpan={item.timeSpan}
                                    content={item.content}
                                />
                            ))}
                            <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                                <div className="timeline-entry-inner">
                                    <div className="timeline-icon color-none"></div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

const getIcon = (iconName) => {
    switch (iconName) {
        case 'faCode':
            return faCode;
        case 'faClipboardCheck':
            return faClipboardCheck;
        case 'faServer':
            return faServer;
        case 'faShip':
            return faShip;
        case 'faGraduationCap':
            return faGraduationCap;
        case 'faHighlighter':
            return faHighlighter;
        default:
            return faCode;
    }
};

const SingleTimeLinebase = (props) => {
    return (
        <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
            <div className="timeline-entry-inner">
                <div className={props.color}>
                    <FontAwesomeIcon icon={props.icon} />
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
