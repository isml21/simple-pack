import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate untuk navigasi programatik
import '../style/Header.css';

const Header = () => {
  const navigate = useNavigate(); // Hook untuk navigasi

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1 style={{cursor:'pointer'}} onClick={() => navigate('/')}>Simplepack</h1>
        </div>
        <nav>
          <ul>
            <li> <button className="nav-btn" onClick={() => navigate('/kemasan')}>
                Cari Kemasan
              </button></li>
            <li><button className="nav-btn" onClick={() => navigate('/pesan')}>
                Pesan Kemasan
              </button></li>
            <li><button className="nav-btn" onClick={() => navigate('/portfolio')}>
                Portofolio
              </button></li>
            <li><button className="nav-btn" onClick={() => navigate('/tentang')}>
                Tentang Kami
              </button></li>
            <li><button className="nav-btn" onClick={() => navigate('/hubungi')}>
                Hubungi Kami
              </button></li>
              <li><button className="nav-btn" onClick={() => navigate('/booking')}>
                Booking
              </button></li>

           
          </ul>
        </nav>
        {/* Navigasi ke halaman login dan registrasi */}
        <button className="login-btn" onClick={() => navigate('/login')}>LOGIN</button>
        <button className="register-btn" onClick={() => navigate('/register')}>REGISTER</button>

      </div>
    </header>
  );
};

export default Header;
