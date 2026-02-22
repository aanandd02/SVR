import React from "react";
import { FaTruckMoving, FaShieldAlt, FaMapMarkedAlt, FaClock } from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <h2>About Us</h2>
      <div className="about-content">
        <div className="about-visual">
          <div className="about-visual-card">
            <div className="about-visual-icon-main">
              <FaTruckMoving />
            </div>
            <div className="about-visual-tagline">Trusted Since Decades</div>
            <div className="about-visual-features">
              <div className="about-visual-feature">
                <FaShieldAlt />
                <span>Safe & Secure</span>
              </div>
              <div className="about-visual-feature">
                <FaMapMarkedAlt />
                <span>PAN India</span>
              </div>
              <div className="about-visual-feature">
                <FaClock />
                <span>On-Time Delivery</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-text">
          <p>
            Shree Vishwanath Roadways is a leading logistics and transport solutions provider based in Vapi, Gujarat.
            With decades of trusted experience, we deliver customized, safe, and efficient transportation services to businesses across India.
          </p>
          <p>
            As trusted <b>Fleet Owners & Transport Contractors</b>, we manage end-to-end logistics — from small parcels to full truckloads — with seamless operations by <b>Road, Rail, and Air</b>.
            Our commitment to timely delivery, safety, and cost-effectiveness has made us a preferred partner for clients in diverse industries.
          </p>
          <p>
            Backed by professional expertise, modern fleet management, and a PAN-India network, we ensure that every consignment is handled with the highest level of care and responsibility.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
