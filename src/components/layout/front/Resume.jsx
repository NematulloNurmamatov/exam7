import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>
            It takes great pains to benefit. His needs result from something
            that actually drives him away. Let them be what they want. Anyone
            whom anyone desires. And no one who hinders receives the others.
            Because he should flee from the offices of convenience which he has
            here.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Nematullo Nurmamatov</h4>
              <p>
                <em>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cum assumenda excepturi delectus. Odio quae ad dolore neque quia temporibus incidunt, reprehenderit asperiores similique!
                </em>
              </p>
              <ul>
                <li>Portland par 127,Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>nematullonurmamatov@example.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Master of Fine Arts &amp; Graphic Design</h4>
              <h5>2021 - 2023</h5>
              <p>
                <em>Rochester Institute of Technology, Rochester, NY</em>
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Nemo adipisci sequi quos
                 quae eos, alias mollitia totam laborum.
              </p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2020 - 2022</h5>
              <p>
                <em>Rochester Institute of Technology, Rochester, NY</em>
              </p>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cum assumenda excepturi delectus. Odio quae ad dolore neque quia temporibus incidunt, reprehenderit asperiores similique!
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Senior graphic design specialist</h4>
              <h5>2021 - Present</h5>
              <p>
                <em>Experion, New York, NY </em>
              </p>
              <ul>
                <li>
                  Lead in the design, development, and implementation of the
                  graphic, layout, and production communication materials
                </li>
                <li>
                  Delegate tasks to the 7 members of the design team and provide
                  counsel on all aspects of the project.{" "}
                </li>
                <li>
                  Supervise the assessment of all graphic materials in order to
                  ensure quality and accuracy of the design
                </li>
                <li>
                  Oversee the efficient use of production project budgets
                  ranging from $2,000 - $25,000
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Graphic design specialist</h4>
              <h5>2017 - 2018</h5>
              <p>
                <em>Stepping Stone Advertising, New York, NY</em>
              </p>
              <ul>
                <li>
                  Developed numerous marketing programs (logos,
                  brochures,infographics, presentations, and advertisements).
                </li>
                <li>
                  Managed up to 5 projects or tasks at a given time while under
                  pressure
                </li>
                <li>
                  Recommended and consulted with clients on the most appropriate
                  graphic design
                </li>
                <li>
                  Created 4+ design presentations and proposals a month for
                  clients and account managers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
