import React from 'react';
import '../style/TentangKami.css';

const TentangKami = () => {
  return (
    <section className="tentang-kami-section" id="tentang">
      <div className="container">
        <h2>Tentang Kami</h2>
        <p>
          Simplepack adalah perusahaan yang berfokus pada solusi kemasan kreatif dan inovatif.
          Kami berdedikasi untuk membantu bisnis Anda menonjol melalui desain kemasan yang
          menarik, fungsional, dan ramah lingkungan.
        </p>
        <div className="team">
          <div className="team-member">
            <img src="path-to-image1.jpg" alt="Founder" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="path-to-image2.jpg" alt="Designer" />
            <h3>Jane Smith</h3>
            <p>Creative Designer</p>
          </div>
          <div className="team-member">
            <img src="path-to-image3.jpg" alt="Manager" />
            <h3>Michael Johnson</h3>
            <p>Operations Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangKami;