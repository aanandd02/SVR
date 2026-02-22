import React, { useState, useEffect, useRef } from "react";
import { FaTruck, FaUsers, FaMapMarkedAlt, FaClock } from "react-icons/fa";
import "./StatsCounter.css";

const stats = [
  { icon: <FaTruck />, target: 500, suffix: "+", label: "Deliveries Completed" },
  { icon: <FaUsers />, target: 200, suffix: "+", label: "Happy Clients" },
  { icon: <FaMapMarkedAlt />, target: 28, suffix: "+", label: "States Covered" },
  { icon: <FaClock />, target: 15, suffix: "+", label: "Years of Experience" },
];

function StatsCounter() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const frameRate = 30;
    const totalFrames = duration / (1000 / frameRate);

    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(stats.map((stat) => Math.round(eased * stat.target)));

      if (frame >= totalFrames) {
        clearInterval(interval);
        setCounts(stats.map((stat) => stat.target));
      }
    }, 1000 / frameRate);
  };

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{stat.icon}</div>
            <h3 className="stat-number">
              {counts[index]}
              {stat.suffix}
            </h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsCounter;
