import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Registrasi from './pages/Registrasi';
import CariKemasan from './components/CariKemasan';
import PesanKemasan from './components/PesanKemasan';
import Portofolio from './components/Portofolio';
import TentangKami from './components/TentangKami';
import HubungiKami from './components/HubungiKami';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registrasi />} />
        <Route path="/kemasan" element={<CariKemasan />} />
        <Route path="/pesan" element={<PesanKemasan />} />
        <Route path="/portfolio" element={<Portofolio />} />
        <Route path="/tentang" element={<TentangKami />} />
        <Route path="/hubungi" element={<HubungiKami />} />
      </Routes>
    </Router>
  );
}

export default App;
