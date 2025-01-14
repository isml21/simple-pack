import React from 'react';
import '../style/HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>Cetak Custom Kemasan Digital Full Color!</h1>
        <p>Bikin Produkmu Berkelas Dunia dengan Kemasan Simple Full Color dari Simplepack!</p>
        <button className="cta-button">
          <a href="https://wa.me/089649597039">
            <i class="fab fa-whatsapp"></i> Info Detail Produk
          </a>
        </button>
      </div>

       <div> 
          <h2>
           Fleksibilitas Pesanan <span className="highlight">Terintegrasi</span>
          </h2>
          <div className="steps">
          <div className="step">
            <div className="icon">
              <img src="path-to-icon1.png" alt="Pesan" />
            </div>
            <span className="number">1</span>
            <h3>Pesan</h3>
          </div>
          <div className="step">
            <div className="icon">
              <img src="path-to-icon2.png" alt="Persetujuan" />
            </div>
            <span className="number">2</span>
            <h3>Persetujuan</h3>
          </div>
          <div className="step">
            <div className="icon">
              <img src="path-to-icon3.png" alt="Kirim" />
            </div>
            <span className="number">3</span>
            <h3>Kirim</h3>
          </div>
          </div>
         <p className="detail-link">
          Bagaimana Kita Fleksibel & Terintegrasi?{" "}
          <a href="#detail">Lihat Detail &raquo;</a>
          </p>
        </div>
      
    </section>
  );
};


export default HeroSection;
