import React from 'react';
import '../style/HubungiKami.css';

const HubungiKami = () => {
  return (
    <section className="hubungi-kami-section" id="hubungi">
      <div className="container">
        <h2>Hubungi Kami</h2>
        <p>
          Kami siap membantu Anda! Jangan ragu untuk menghubungi kami melalui form di bawah atau
          kontak yang tersedia.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nama</label>
            <input type="text" id="name" name="name" placeholder="Masukkan nama Anda" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Masukkan email Anda" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Pesan</label>
            <textarea id="message" name="message" rows="5" placeholder="Tulis pesan Anda di sini"></textarea>
          </div>
          <button type="submit" className="submit-button">Kirim Pesan</button>
        </form>

        <div className="contact-info">
          <p><strong>Email:</strong> support@simplepack.com</p>
          <p><strong>Telepon:</strong> +62 896-4959-7039</p>
          <p><strong>Alamat:</strong> Jl. Bhayangkara,Surakarta</p>
        </div>
      </div>
    </section>
  );
};

export default HubungiKami;
