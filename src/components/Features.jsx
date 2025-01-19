import React from 'react';
import '../style/Features.css';
import { FaWhatsapp } from 'react-icons/fa'; // Import ikon WhatsApp dari react-icons

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="feature-item">
          <h3>Tanpa Investasi Plat</h3>
        </div>
        <div className="feature-item">
          <h3>Bukan Paper Foil</h3>
        </div>
        <div className="feature-item">
          <h3>Food Grade</h3>
        </div>
        <div className="feature-item">
          <h3>Desain Tidak Terbatas</h3>
        </div>
      </div>

      {/* Tambahkan logo WhatsApp dengan link */}
      <a
        href="https://wa.me/089649597039" // Ganti dengan nomor WhatsApp Anda
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        { <FaWhatsapp className="whatsapp-icon" /> }
      </a>
    </section>
  );
};

export default Features;