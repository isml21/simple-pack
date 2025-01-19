import React from 'react';
import '../style/Portofolio.css';

const Portofolio = () => {
  return (
    <section className="portofolio-section" id="portfolio">
      <div className="container">
        <h2>Portofolio</h2>
        <p>Lihat beberapa hasil karya kami yang telah membantu berbagai brand meningkatkan nilai produk mereka!</p>
        <div className="portfolio-item">
          <img src="path-to-image1.jpg" alt="Project 1" />
          <h3>Project 1</h3>
          <p>Deskripsi singkat Project 1: Misalnya, desain kemasan untuk produk minuman yang memenangkan penghargaan.</p>
          <a href="/project1-details" className="button">Lihat Detail</a>
        </div>
        <div className="portfolio-item">
          <img src="path-to-image2.jpg" alt="Project 2" />
          <h3>Project 2</h3>
          <p>Deskripsi singkat Project 2: Misalnya, solusi kemasan ramah lingkungan untuk produk makanan ringan.</p>
          <a href="/project2-details" className="button">Lihat Detail</a>
        </div>
        <div className="portfolio-item">
          <img src="path-to-image3.jpg" alt="Project 3" />
          <h3>Project 3</h3>
          <p>Deskripsi singkat Project 3: Misalnya, pengemasan eksklusif untuk produk kosmetik premium.</p>
          <a href="/project3-details" className="button">Lihat Detail</a>
        </div>
        <div className="portfolio-item">
          <img src="path-to-image4.jpg" alt="Project 4" />
          <h3>Project 4</h3>
          <p>Deskripsi singkat Project 4: Misalnya, kemasan inovatif untuk produk kesehatan.</p>
          <a href="/project4-details" className="button">Lihat Detail</a>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
