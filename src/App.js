import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, once: true });

    // Custom cursor logic
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    window.addEventListener("mousemove", (e) => {
      cursorDot.style.left = e.clientX + "px";
      cursorDot.style.top = e.clientY + "px";
      cursorOutline.style.left = e.clientX + "px";
      cursorOutline.style.top = e.clientY + "px";
    });

    document.querySelectorAll("a, button, .project-link").forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursorDot.style.transform = "translate(-50%, -50%) scale(1.5)";
        cursorOutline.style.transform = "translate(-50%, -50%) scale(1.5)";
        cursorOutline.style.borderWidth = "1px";
      });
      element.addEventListener("mouseleave", () => {
        cursorDot.style.transform = "translate(-50%, -50%) scale(1)";
        cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";
        cursorOutline.style.borderWidth = "2px";
      });
    });

    // Navbar scroll effect
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.style.padding = "1rem 2rem";
        navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
      } else {
        navbar.style.padding = "1.5rem 2rem";
        navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.05)";
      }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Footer />
    </>
  );
}

export default App;
