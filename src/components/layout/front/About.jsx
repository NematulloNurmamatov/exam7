import React from "react";
import "./About.css";
import aboutImg from "../../../assets/img/nematullo.png";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
            Nematullo, who has been studying for 2 years. I am 17 years old. I first studied at Amity University and then studied at Salvation Education. I live in Tashkent. I study frontend programming, I now know html, css, git, tailwind, sass, bootstrap, javascript, Dom, Bom, ReactJs, NextJs and TypeScript
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={aboutImg} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Frontend - Web Developer.</h3>
            <p className="fst-italic">
              My name is Jahongir. I am a future front-end developer. I want to
              be one of the best programmers
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong> <span>13 april 2006</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong> <span>nurmamatov-portfolio.netlify.app/</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span>+998 88 295-51-11</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong> <span>Uzbekistan, Jizzax</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong> <span>17</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong> <span>Junior</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>PhEmailone:</strong>{" "}
                    <span>nematullohataboev@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance:</strong> <span>Not available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Therefore, choosing the services of labor and pains is the choice
              of the services. Anyone can get everything and that. There are no
              prosecutors in charge of the services at the time. And all his
              Because of desire, as said, most of the offices. But those who
              will be pursued will not be repulsed. Something really interesting
              to look for with desire. And from him who is repulsed by all the
              guilt of great praise the pains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
