import React, { useState, useEffect, useCallback } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Testimonials.css";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Factory Owner, Mumbai",
    feedback:
      "SVR ensured our factory goods reached on time every single time. Their reliability and professionalism is unmatched in the industry.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Business Owner, Ahmedabad",
    feedback:
      "Professional team, well-maintained trucks, and completely hassle-free delivery. They handle our logistics like their own business.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Distributor, Delhi",
    feedback:
      "Great experience! Transparent pricing and safe transportation. We've been working with SVR for over 5 years now.",
    rating: 5,
  },
  {
    name: "Suresh Gupta",
    role: "Exporter, Surat",
    feedback:
      "Their PAN-India network is truly impressive. Whether it's road, rail, or air — SVR always delivers on their promise.",
    rating: 4,
  },
  {
    name: "Meena Joshi",
    role: "Warehouse Manager, Pune",
    feedback:
      "Excellent warehousing and distribution services. The team is responsive, and tracking is always up to date.",
    rating: 5,
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  const prev = () => {
    setCurrent((p) => (p - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section
      className="testimonials"
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h2>What Our Clients Say</h2>
      <p className="testimonials-subtitle">
        Trusted by businesses across India for reliable logistics
      </p>

      <div className="carousel-wrapper">
        <button className="carousel-btn carousel-prev" onClick={prev} aria-label="Previous testimonial">
          <FaChevronLeft />
        </button>

        <div className="carousel-track">
          {reviews.map((review, index) => (
            <div
              className={`review-card ${index === current ? "active" : ""}`}
              key={index}
            >
              <FaQuoteLeft className="quote-icon" />
              <p className="feedback">{review.feedback}</p>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < review.rating ? "star filled" : "star"}
                  />
                ))}
              </div>
              <h4>{review.name}</h4>
              <span className="review-role">{review.role}</span>
            </div>
          ))}
        </div>

        <button className="carousel-btn carousel-next" onClick={next} aria-label="Next testimonial">
          <FaChevronRight />
        </button>
      </div>

      <div className="carousel-dots">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
