import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Registrasi from './pages/Registrasi';
import CariKemasan from './components/CariKemasan';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registrasi />} />
        <Route path="/kemasan" element={<CariKemasan />} />
      </Routes>
    </Router>
  );
}

export default App;
