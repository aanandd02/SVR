import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import "./Hero.css";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "why", label: "Why Us" },
  { id: "gallery", label: "Gallery" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const sectionIds = navItems.map((item) => item.id);

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + window.innerHeight / 3;
      let currentSection = "home";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="video-background">
        <video autoPlay loop muted playsInline poster="/hero-bg.jpg">
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <Particles
        className="particles"
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 30 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.8 },
            links: {
              enable: true,
              distance: 130,
              color: "#f39c12",
              opacity: 0.2,
            },
            color: { value: "#f39c12" },
            opacity: { value: 0.5 },
          },
          detectRetina: true,
        }}
      />

      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="logo-box">
          <img src="/Logo.png" alt="SVR Logo" className="nav-logo" />
          <div className="logo-text">
            <span className="logo-main">SVR</span>
            <span className="hindi-text">श्री जय माँ विन्ध्यवासिनी</span>
          </div>
        </div>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <motion.a
                href={`#${item.id}`}
                className={activeSection === item.id ? "active-link" : ""}
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.label}
              </motion.a>
            </li>
          ))}
        </ul>
      </nav>

      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
      )}

      <div className="overlay">
        <motion.img
          src="/Logo.png"
          alt="SVR Logo"
          className="hero-logo"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        />
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Shree Vishwanath Roadways
        </motion.h1>
        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Trusted Transport Contractors & Fleet Owners
        </motion.p>
        <motion.a
          href="#contact"
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </div>

      <motion.div
        className="scroll-down"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        &#8595;
      </motion.div>
    </section>
  );
}

export default Hero;
