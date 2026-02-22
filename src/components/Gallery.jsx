import React, { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Gallery.css";

const images = [
  { src: "/1.png", alt: "Truck 1" },
  { src: "/2.png", alt: "Truck 2" },
  { src: "/3.png", alt: "Truck 3" },
  { src: "/4.png", alt: "Truck 4" },
];

function Gallery() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const openLightbox = (index) => setLightbox({ open: true, index });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });

  const navigate = (direction) => {
    setLightbox((prev) => ({
      open: true,
      index: (prev.index + direction + images.length) % images.length,
    }));
  };

  return (
    <section className="gallery" id="gallery">
      <h2>Our Fleet</h2>
      <p className="gallery-subtitle">
        A glimpse of our well-maintained fleet ready to serve you across India
      </p>
      <div className="images">
        {images.map((img, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => openLightbox(index)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="gallery-overlay">
              <span>View</span>
            </div>
          </div>
        ))}
      </div>

      {lightbox.open && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <FaTimes />
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              navigate(-1);
            }}
            aria-label="Previous image"
          >
            <FaChevronLeft />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[lightbox.index].src} alt={images[lightbox.index].alt} />
            <p className="lightbox-caption">
              {lightbox.index + 1} / {images.length}
            </p>
          </div>
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              navigate(1);
            }}
            aria-label="Next image"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;
