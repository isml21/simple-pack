import React from 'react';
import '../style/HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>Cetak Custom Kemasan Digital Full Color!</h1>
        <p>Bikin Produkmu Berkelas Dunia dengan Kemasan Simple Full Color dari Simplepack!</p>
        <button className="cta-button">
          <a href="https://wa.me/6281234567890">
            <i class="fab fa-whatsapp"></i> Info Detail Produk
          </a>
        </button>
      </div>
    </section>
  );
};


export default HeroSection;
