import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navigation.css'; // Assuming you will create a CSS file for styling

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/pesan">Pesan Kemasan</Link></li>
        <li><Link to="/kemasan">Kemasan</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/tentang">Tentang Kami</Link></li>
        <li><Link to="/hubungi">Hubungi Kami</Link></li>
        <li><Link to="/booking">Booking </Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
