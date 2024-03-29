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
                          <a className="btn btn-danger" href="https://docs.google.com/document/d/1M8KsOo2KrOBcru5Ub5Y618uPcpHihhRL/edit?usp=sharing&ouid=105765862592509983012&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">View CV <FaDownload/></a>
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
                          <h1 style={{color: 'white'}}>Creativity is contagious<br/> pass it on!!</h1>
                          <p><a className="btn btn-danger" href="https://www.udemy.com/user/chandra-prakash-v/" target="_blank" rel="noopener noreferrer">Guiding World <FaBriefcase /></a></p>
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