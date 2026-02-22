import React, { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Loader from "./components/Loader";

const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs"));
const StatsCounter = lazy(() => import("./components/StatsCounter"));
const Gallery = lazy(() => import("./components/Gallery"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const WhatsAppButton = lazy(() => import("./components/WhatsAppButton"));
const Footer = lazy(() => import("./components/Footer"));
const ContactPopup = lazy(() => import("./components/ContactPopup"));
const BackToTop = lazy(() => import("./components/BackToTop"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Services />
          <WhyChooseUs />
          <StatsCounter />
          <Gallery />
          <Testimonials />
          <Contact />
          <WhatsAppButton />
          <ContactPopup />
          <BackToTop />
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
