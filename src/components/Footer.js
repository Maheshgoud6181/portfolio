function Footer() {
  return (
    <section id="contact" className="footer">
      <div className="footer-container">
        <div className="section-title">
          <h2>
            Get in <span style={{ color: "var(--primary)" }}>Touch</span>
          </h2>
          <p>Let's work together on your next project</p>
        </div>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/mahesh-goud6181/"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/Maheshgoud6181"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:maheshkalal9390@gmail.com" className="social-icon">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="tel:9390936181" className="social-icon">
            <i className="fas fa-phone"></i>
          </a>
        </div>

        <div className="copyright">
          <p>© 2023 Mahesh Goud Kalal. All Rights Reserved.</p>
          <p>
            Hyderabad, Telangana, 500045 | 9390936181 | maheshkalal9390@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
