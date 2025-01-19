import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './components/Register'; // Importing the Register component
import CariKemasan from './components/CariKemasan';
import PesanKemasan from './components/PesanKemasan';
import Portofolio from './components/Portofolio';
import TentangKami from './components/TentangKami';
import HubungiKami from './components/HubungiKami';
import BookingTable from './components/BookingTable';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes >
      <Route element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pesan" element={<PesanKemasan />} />
        <Route path="/kemasan" element={<CariKemasan />} />
        <Route path="/portfolio" element={<Portofolio />} />
        <Route path="/tentang" element={<TentangKami />} />
        <Route path="/hubungi" element={<HubungiKami />} />
        <Route path="/booking" element={<BookingTable />} />
        </Route>
      </Routes>
    </Router>
  );
}

const Layout = () => {

return <>
 <Header />
 <Outlet/>
 <Footer />
</>
}

export default App;