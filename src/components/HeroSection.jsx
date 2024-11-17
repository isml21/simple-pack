import React from 'react';
import '../style/HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>Cetak Custom Kemasan Digital Full Color!</h1>
        <p>Bikin Produkmu Berkelas Dunia dengan Kemasan Fleksibel Full Color dari FlexyPack!</p>
        <button className="cta-button">
          <a href="https://wa.me/089649597039">Info Detail Produk</a>
        </button>
        <div className="image-gallery">
          {/* Masukkan gambar produk */}
          <img src="path-to-image1" alt="Produk 1" />
          <img src="path-to-image2" alt="Produk 2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
