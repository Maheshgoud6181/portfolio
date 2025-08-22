import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <div className="section-title" data-aos="fade-up" data-aos-duration="800">
        <h2>
          About <span style={{ color: "#2563eb" }}>Me</span>
        </h2>
        <p>Get to know me better</p>
      </div>

      <div className="about-container">
        <div className="about-grid">
          <div
            className="about-content"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h3>INTRODUCTION</h3>
            <h2>
              Mahesh Goud{" "}
              <span style={{ color: "var(--primary)" }}>Kalal</span>
            </h2>
            <p>{/*  */}
              A passionate Full Stack Developer with expertise in creating
              dynamic and responsive web applications. I specialize in both
              frontend and backend development, with a keen eye for design and
              user experience.
            </p>
            <p>
              Currently pursuing my B.Tech at NIT Durgapur while working as a
              Web Developer for Prakriti Club and Evolvere Society. I'm
              dedicated to creating innovative solutions and continuously
              expanding my skill set.
            </p>

            <div className="about-stats">
              <div className="stat-box" data-aos="fade-up" data-aos-duration="800">
                <div className="stat-number">7+</div>
                <div className="stat-text">Projects Completed</div>
              </div>
              <div
                className="stat-box"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <div className="stat-number">2</div>
                <div className="stat-text">Clubs/Societies</div>
              </div>
              <div
                className="stat-box"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <div className="stat-number">95%</div>
                <div className="stat-text">JEE Score</div>
              </div>
              <div
                className="stat-box"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="stat-number">A+</div>
                <div className="stat-text">Computer Courses</div>
              </div>
            </div>
          </div>

          <div
            className="about-education"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h3>Education</h3>

            <div className="education-item">
              <h4>Industry Ready Certification in Full-stack Development</h4>
              <p>Nxtwave Disruptive Technologies</p>
              <p className="date">Aug 2023 - Ongoing</p>
            </div>

            {/* <div className="education-item">
              <h4>B.Tech in Bio-Technology</h4>
              <p>National Institute of Technology, Durgapur</p>
              <p>CGPA: 6.6</p>
              <p className="date">2023 - 2027</p>
            </div> */}


            <div className="education-item">
  <h4>Bachelor of Technology</h4>
  <p>National Institute of Technology, Durgapur</p>
  <p>Focused on Software Development & Web Technologies</p>
  <p className="date">2023 - 2027</p>
</div>


<div className="education-item">
  <h4>JEE Mains Qualified</h4>
  <p>Sri Chaitanya Junior Collage, S.R Nagar</p>
  <p>Achieved 95 Percentile (~Top 5% Nationwide)</p>
  <p className="date">2022</p>
</div>


              {/* <div className="education-item">
                <h4>Intermediate (MPC)</h4>
                <p>Sri Chaitanya Junior Collage, S.R Nagar</p>
                <p>Percentage: 86.4%</p>
                <p className="date">2020 - 2022</p>
              </div>  */}


              


            {/* <div className="education-item">
              <h4>Secondary School Of Certificate</h4>
              <p>Sri Chaitanya Techno School, Hyderabad</p>
              <p>Percentage: 100.0%</p>
              <p className="date">2019 - 2020</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
