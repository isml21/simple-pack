import React from 'react';
import '../style/Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>FlexyPack</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#kemasan">Cari Kemasan</a></li>
            <li><a href="#pesan">Pesan Kemasan</a></li>
            <li><a href="#portfolio">Portofolio</a></li>
            <li><a href="#tentang">Tentang Kami</a></li>
            <li><a href="#hubungi">Hubungi Kami</a></li>
          </ul>
        </nav>
        <button className="login-btn">LOGIN</button>
        <button className="login-btn">REGISTRASI</button>
        
      </div>
    </header>
  );
};

export default Header;