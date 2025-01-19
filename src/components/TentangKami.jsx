import React from 'react';
import '../style/TentangKami.css';

const TentangKami = () => {
  return (
    <section className="tentang-kami-section">
      <div className="container">
        <h2>Tentang Kami</h2>
        <p>Kami adalah tim yang berdedikasi untuk memberikan solusi kemasan terbaik.</p>
        
        <div className="team-section">
          <div className="team-member">
            <img src="path-to-founder-image.jpg" alt="Founder" />
            <h3>Founder</h3>
            <p>Deskripsi singkat tentang Founder.</p>
          </div>
          <div className="team-member">
            <img src="path-to-designer-image.jpg" alt="Designer" />
            <h3>Designer</h3>
            <p>Deskripsi singkat tentang Designer.</p>
          </div>
          <div className="team-member">
            <img src="path-to-manager-image.jpg" alt="Manager" />
            <h3>Manager</h3>
            <p>Deskripsi singkat tentang Manager.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangKami;
