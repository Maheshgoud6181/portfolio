import React from "react";

function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="section-title" data-aos="fade-up" data-aos-duration="800">
        <h2>
          My <span style={{ color: "var(--primary)" }}>Achievements</span>
        </h2>
        <p>Notable accomplishments and recognitions</p>
      </div>

      <div className="achievements-container">
        <div
          className="achievement-card"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h3>
            <i className="fas fa-trophy"></i> Finalist – NIT Durgapur Hackathon
          </h3>
          <p>
            Team Lead of a shortlisted project at NIT Durgapur's official
            hackathon. Led the development of an AI-based Student Performance
            Prediction tool with prompt-based data fetching and smart insights.
            Successfully guided the team through ideation, development, and
            final presentation stages.
          </p>
        </div>

        <div
          className="achievement-card"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <h3>
            <i className="fas fa-star"></i> Excellent Academic Performance
          </h3>
          <p>
            Achieved perfect scores (A+ grades) in all computer science and
            programming related courses during the first year at NIT Durgapur,
            demonstrating strong aptitude for technology and software
            development.
          </p>
        </div>

        {/* <div
          className="achievement-card"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <h3>
            <i className="fas fa-medal"></i> Perfect SSC Score
          </h3>
          <p>
            Secured 100% score in Secondary School Certificate examination,
            showcasing exceptional academic discipline and dedication to
            excellence.
          </p>
        </div> */}

        <div
          className="achievement-card"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <h3>
            <i className="fas fa-award"></i> Web Development Recognition
          </h3>
          <p>
            Selected for Evolvere Society based on outstanding performance in
            website development task during recruitment, recognized for
            innovative design solutions and technical proficiency.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
