function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-title" data-aos="fade-up" data-aos-duration="800">
        <h2>
          My <span style={{ color: "var(--primary)" }}>Skills</span>
        </h2>
        <p>Here are the technologies and tools I specialize in</p>
      </div>

      <div className="skills-container">
        <div className="skills-grid">
          {/* Frontend */}
          <div className="skill-category" data-aos="fade-up" data-aos-duration="800">
            <h3>Frontend</h3>
            <ul className="skill-list">
              <li><i className="fab fa-html5"></i> HTML</li>
              <li><i className="fab fa-css3-alt"></i> CSS</li>
              <li><i className="fab fa-bootstrap"></i> Bootstrap</li>
              <li><i className="fab fa-js-square"></i> JavaScript</li>
              <li><i className="fab fa-react"></i> React.js</li>
            </ul>
          </div>

          {/* Backend */}
          <div
            className="skill-category"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h3>Backend</h3>
            <ul className="skill-list">
              <li><i className="fab fa-python"></i> Python</li>
              <li><i className="fab fa-node-js"></i> Express</li>
              <li><i className="fab fa-node"></i> Node.js</li>
            </ul>
          </div>

          {/* Databases & Other */}
          <div
            className="skill-category"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <h3>Databases & Other</h3>
            <ul className="skill-list">
              <li><i class="fas fa-database"></i> MongoDB</li>  
              <li><i className="fas fa-database"></i> SQLite</li>
              <li><i className="fas fa-robot"></i> AI / ML</li>
              <li><i className="fas fa-code"></i> C++</li>
              <li><i className="fas fa-box"></i> Flexbox</li>
              <li><i className="fab fa-git-alt"></i> Git</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
