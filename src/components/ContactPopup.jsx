import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import "./ContactPopup.css";

function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    drop: "",
    goods: "",
    weight: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = new FormData();
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "5f78390f-d292-49fc-bedd-2d0913721133";
    form.append("access_key", accessKey);
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });
      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", msg: "Inquiry sent successfully! We'll contact you soon." });
        setFormData({
          name: "",
          phone: "",
          email: "",
          pickup: "",
          drop: "",
          goods: "",
          weight: "",
          message: "",
        });
      } else {
        setStatus({ type: "error", msg: result.message || "Error sending inquiry. Please try again." });
      }
    } catch {
      setStatus({ type: "error", msg: "Network error. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button className="contact-float" onClick={() => setIsOpen(true)} aria-label="Get a Quote">
        <FaEnvelope className="contact-icon" />
        <span className="contact-float-label">Get Quote</span>
      </button>

      {isOpen && (
        <div className="popup-overlay" onClick={() => setIsOpen(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✖
            </button>
            <h2>Get a Quote</h2>
            <p className="popup-subtitle">Fill the form and we'll get back to you within 24 hours</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Pickup Location"
                  value={formData.pickup}
                  onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Drop Location"
                  value={formData.drop}
                  onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Type of Goods"
                  value={formData.goods}
                  onChange={(e) => setFormData({ ...formData, goods: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Weight / Qty (Optional)"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                />
              </div>
              <textarea
                placeholder="Message / Special Instructions"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="btn-loading">
                    <span className="spinner"></span> Sending...
                  </span>
                ) : (
                  "Send Inquiry"
                )}
              </button>
            </form>
            {status && (
              <p className={`status ${status.type}`}>{status.msg}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ContactPopup;
