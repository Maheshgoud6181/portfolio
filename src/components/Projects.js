function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-title" data-aos="fade-up" data-aos-duration="800">
        <h2>
          My <span style={{ color: "var(--primary)" }}>Projects</span>
        </h2>
        <p>Here are some of my recent works</p>
      </div>

      <div className="projects-grid">






<div className="project-card" data-aos="fade-up" data-aos-duration="800">

  <div className="project-img">
    <img
      src="https://placehold.co/600x400/22c55e/FFFFFF?text=Prakriti+Club+Website"
      alt="Prakriti Club Website"
    />
    <div className="project-overlay">
      <div className="project-links">
        <a
          href="https://www.prakritinitdgp.co.in/"
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-link"></i>
        </a>
      </div>
    </div>
  </div>

  <div className="project-info">
    <h3>Prakriti Club Website</h3>
    <p>
      Maintaining and updating the official website of 
      <strong> Prakriti – The Techno-Environmental Club of NIT Durgapur</strong> 
      as a <strong>Junior Head</strong>.
    </p>
    <ul>
      <li>Enhanced UI/UX and ensured mobile responsiveness</li>
      <li>Managed event updates and content regularly</li>
    </ul>
    <div className="project-tags">
      <span className="project-tag">HTML</span>
      <span className="project-tag">CSS</span>
      <span className="project-tag">JavaScript</span>
      <span className="project-tag">React</span>
      <span className="project-tag">REST API</span>
      <span className="project-tag">Bootstrap</span>
    </div>
  </div>

</div>


















        <div className="project-card" data-aos="fade-up" data-aos-duration="800">

  <div className="project-img">
    <img
      src="https://placehold.co/600x400/16a34a/FFFFFF?text=Evolvere+Society+Website"
      alt="Evolvere Society Website"
       href="https://evolverenitdgp.netlify.app/"

    />
    <div className="project-overlay">
      <div className="project-links">
        <a
          href="https://evolverenitdgp.netlify.app/"
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-link"></i>
        </a>
      </div>
    </div>
  </div>

  <div className="project-info">
    <h3>Evolvere Departmental Society Website</h3>
    <p>
      Designed and developed a modern website for our departmental society 
      <strong>“Evolvere”</strong> to showcase events, achievements, and student 
      activities with a responsive and engaging UI.
    </p>
    <ul>
      <li>Built interactive UI with smooth animations for better user engagement</li>
      <li>Integrated functional form connected to backend API for event registrations</li>
    </ul>
    <div className="project-tags">
      <span className="project-tag">React</span>
      <span className="project-tag">Tailwind CSS</span>
      <span className="project-tag">JavaScript</span>
      <span className="project-tag">REST API</span>
      <span className="project-tag">Animations</span>
    </div>
  </div>

</div>





<div
          className="project-card"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <div className="project-img">
            <img
              src="https://placehold.co/600x400/6366f1/FFFFFF?text=Student+Performance"
              alt="Student Performance Prediction"
            />
            <div className="project-overlay">
              <div className="project-links">
                <a href="/" className="project-link">
                  <i className="fas fa-link"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="project-info">
            <h3>Student Performance Prediction</h3>
            <p>
              AI model that predicts student performance based on study habits,
              attendance, and past scores.
            </p>
            <ul>
              <li>Predicts student performance using AI/ML techniques</li>
              <li>Prompt-based data fetching for insights</li>
              <li>Interactive dashboard for visualization</li>
            </ul>
            <div className="project-tags">
              <span className="project-tag">HTML</span>
              <span className="project-tag">CSS</span>
              <span className="project-tag">JavaScript</span>
              <span className="project-tag">Bootstrap</span>
              <span className="project-tag">React.js</span>
              <span className="project-tag">Python</span>
            </div>
          </div>
        </div>





 




        {/* Project 1 */}
        <div className="project-card" data-aos="fade-up" data-aos-duration="800">
          <div className="project-img">
            <img
              src="https://placehold.co/600x400/2563eb/FFFFFF?text=Typing+Speed+Test"
              alt="Typing Speed Test"
            />
            <div className="project-overlay">
              <div className="project-links">
                <a
                  href="https://maheshspeedtyp.ccbp.tech"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-link"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="project-info">
            <h3>Typing Speed Test</h3>
            <p>
              Developed an application which measuring time user took to complete
              given paragraph.
            </p>
            <ul>
              <li>Maintained timer using setTimeInterval, clearTimeInterval APIs</li>
              <li>Fetched paragraph from server asynchronously using fetch GET HTTP API</li>
              <li>Implemented form validations for incomplete paragraph</li>
            </ul>
            <div className="project-tags">
              <span className="project-tag">HTML</span>
              <span className="project-tag">CSS</span>
              <span className="project-tag">JS</span>
              <span className="project-tag">REST API</span>
              <span className="project-tag">Bootstrap</span>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        {/* <div
          className="project-card"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <div className="project-img">
            <img
              src="https://placehold.co/600x400/10b981/FFFFFF?text=Todos+Application"
              alt="Todos Application"
            />
            <div className="project-overlay">
              <div className="project-links">
                <a
                  href="https://maheshtodowebr.ccbp.tech"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-link"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="project-info">
            <h3>Todos Application</h3>
            <p>A comprehensive todo management tool designed to enhance productivity.</p>
            <ul>
              <li>User-friendly interface with HTML, CSS, and Bootstrap</li>
              <li>JavaScript-based CRUD operations with dynamic UI updates</li>
              <li>Local storage implementation for task persistence</li>
            </ul>
            <div className="project-tags">
              <span className="project-tag">HTML</span>
              <span className="project-tag">CSS</span>
              <span className="project-tag">JS</span>
              <span className="project-tag">Bootstrap</span>
            </div>
          </div>
        </div> */}

        {/* Project 3 */}
        <div
          className="project-card"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <div className="project-img">
            <img
              src="https://placehold.co/600x400/f59e0b/FFFFFF?text=Wikipedia+Search"
              alt="Wikipedia Search Application"
            />
            <div className="project-overlay">
              <div className="project-links">
                <a
                  href="https://maheshwikisearc.ccbp.tech"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-link"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="project-info">
            <h3>Wikipedia Search Application</h3>
            <p>Search application that delivers relevant and curated results from Wikipedia.</p>
            <ul>
              <li>Beautifully presented search results with responsive design</li>
              <li>Asynchronous fetch GET HTTP API calls</li>
              <li>Ability to open results in new tab for further reading</li>
            </ul>
            <div className="project-tags">
              <span className="project-tag">HTML</span>
              <span className="project-tag">CSS</span>
              <span className="project-tag">JS</span>
              <span className="project-tag">REST API</span>
              <span className="project-tag">Bootstrap</span>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        
      </div>
    </section>
  );
}

export default Projects;
