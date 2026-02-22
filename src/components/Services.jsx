import React from "react";
import { FaTruckMoving, FaTruck, FaBoxes, FaWarehouse, FaShippingFast, FaPlane, FaTrain } from "react-icons/fa";
import "./Services.css";

const services = [
  { icon: <FaTruckMoving />, title: "Road Transportation", desc: "Nationwide road transport with a well-maintained fleet of trucks and trailers ensuring reliable deliveries across India." },
  { icon: <FaTrain />, title: "Rail Transportation", desc: "Cost-effective rail freight solutions for bulk cargo with reliable scheduling and pan-India rail network connectivity." },
  { icon: <FaPlane />, title: "Air Transportation", desc: "Fast and secure air cargo services for time-sensitive shipments ensuring quick delivery across India and beyond." },
  { icon: <FaTruck />, title: "Full Truck Load (FTL)", desc: "Dedicated trucks for large shipments ensuring faster transit time and enhanced safety of goods." },
  { icon: <FaBoxes />, title: "Part Truck Load (PTL)", desc: "Economical solution for small shipments by sharing truck space while ensuring safe handling." },
  { icon: <FaWarehouse />, title: "Warehousing & Distribution", desc: "Secure warehousing facilities and streamlined distribution to manage supply chains effectively." },
  { icon: <FaShippingFast />, title: "Door-to-Door Delivery", desc: "Hassle-free pickup and delivery services ensuring end-to-end convenience for clients." },
];

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <p className="services-subtitle">Comprehensive logistics solutions for every business need</p>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <div className="card-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
