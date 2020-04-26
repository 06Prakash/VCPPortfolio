import React from "react"
import { FaDownload, FaBriefcase } from "react-icons/fa"

const Introduction = () => {
    return (
        <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{color: 'white'}}>Hi! This is <br />Chandra Prakash V</h1>
                          <a className="btn btn-danger" href="https://drive.google.com/file/d/0B0Rrhy9iBAsASEF5aVR5UHllbGRKMFpmQnVhMmFRTUszOUMw/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV <FaDownload/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: 'url(images/img-1.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{color: 'White'}}>Passionate Towards Innovation!!</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: 'url(images/img-5.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{color: 'white'}}>Creativity is contagious pass it on!!</h1>
                          <p><a className="btn btn-danger" href="https://www.udemy.com/user/chandra-prakash-v/" target="_blank" rel="noopener noreferrer">View Instructor Account <FaBriefcase /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
}

export default Introduction