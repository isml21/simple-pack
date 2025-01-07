import React from 'react';
import '../style/CariKemasan.css';

const CariKemasan = () => {
  return (
    <section className="cari-kemasan">
      <div className="container">
        <h2>Cari Kemasan</h2>
        <p>
          Temukan berbagai jenis kemasan yang sesuai untuk kebutuhan produk Anda. Kami menyediakan solusi 
          terbaik untuk kemasan berkualitas tinggi.
        </p>
        <div className="kemasan-options">
          <div className="kemasan-item">
            <img src="/images/stand-up-pouch.jpg" alt="Kemasan Stand Up Pouch" />
            <h3>Kemasan Stand Up Pouch</h3>
            <p>Kemasan fleksibel yang ideal untuk berbagai produk.</p>
          </div>
          <div className="kemasan-item">
            <img src="/images/sachet.jpg" alt="Kemasan Sachet" />
            <h3>Kemasan Sachet</h3>
            <p>Solusi praktis untuk produk dalam ukuran kecil.</p>
          </div>
          <div className="kemasan-item">
            <img src="/images/roll.jpg" alt="Kemasan Roll" />
            <h3>Kemasan Roll</h3>
            <p>Kemasan fleksibel berbentuk roll untuk produksi masal.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CariKemasan;