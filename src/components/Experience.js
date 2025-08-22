function Experience() {
   return (
      <section id="experience" className="experience">
         <div className="section-title" data-aos="fade-up" data-aos-duration="800">
            <h2>
               Work <span style={{ color: "var(--primary)" }}>Experience</span>
            </h2>
            <p>My professional journey</p>
         </div>

         <div className="timeline">
            <div className="timeline-item" data-aos="fade-up" data-aos-duration="800">
               <div className="timeline-content">
                  <h3>Junior Web Developer</h3>
                  <div className="date">Aug 2023 – May 2027 | Durgapur, WB</div>
                  <p><strong>Prakriti Club, NIT Durgapur</strong></p>
                  <ul>
                     <li>Updated and maintained the official website of the club, ensuring it aligned with the club's theme of environmental awareness</li>
                     <li>Organized and conducted the online quiz event "Nature Nexus Quest", which successfully engaged a diverse audience and promoted environmental awareness</li>
                     <li>Collaborated with team members to design and implement interactive web elements for event promotion</li>
                  </ul>
               </div>
            </div>

            <div className="timeline-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
               <div className="timeline-content">
                  <h3>Web Developer</h3>
                  <div className="date">Nov 2024 - Present | Durgapur, WB</div>
                  <p><strong>Evolvere Society, NIT Durgapur</strong></p>
                  <ul>
                     <li>Selected for the Evolvere Society based on exceptional performance in the website development task during the recruitment process</li>
                     <li>Inducted for showcasing proficiency in web development and innovative design solutions</li>
                     <li>Developed and maintained the official website for the society with modern UI/UX principles</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Experience;
