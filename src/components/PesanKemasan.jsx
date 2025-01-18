import React, { useState } from 'react';
import '../style/PesanKemasan.css';
import { insertBooking } from '../api'; // Importing the insertBooking function

const PesanKemasan = () => {
  const [formData, setFormData] = useState({
    ID_CUSTOMER: '',
    ID_PRODUK: '',
    JUMLAH_BARANG: '',
    TANGGAL_BOOKING: '',
    WAKTU_BOOKING: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await insertBooking(formData); // Sending booking data to the backend
      alert(`Pesanan untuk produk ID ${formData.ID_PRODUK} telah diterima!`);
      setFormData({
        ID_CUSTOMER: '',
        ID_PRODUK: '',
        JUMLAH_BARANG: '',
        TANGGAL_BOOKING: '',
        WAKTU_BOOKING: '',
      });
    } catch (error) {
      console.error('Error inserting booking:', error);
      alert('Terjadi kesalahan saat memesan. Silakan coba lagi.');
    }
  };

  return (
    <div className="pesan-kemasan-container">
      <h1>Pesan Kemasan</h1>
      <p>Isi formulir di bawah untuk memesan kemasan produk Anda.</p>
      <form onSubmit={handleSubmit} className="pesan-kemasan-form">
        <label htmlFor="ID_CUSTOMER">ID Customer:</label>
        <input
          type="text"
          id="ID_CUSTOMER"
          name="ID_CUSTOMER"
          value={formData.ID_CUSTOMER}
          onChange={handleChange}
          placeholder="Masukkan ID Customer"
          required
        />

        <label htmlFor="ID_PRODUK">ID Produk:</label>
        <input
          type="text"
          id="ID_PRODUK"
          name="ID_PRODUK"
          value={formData.ID_PRODUK}
          onChange={handleChange}
          placeholder="Masukkan ID Produk"
          required
        />

        <label htmlFor="JUMLAH_BARANG">Jumlah Barang:</label>
        <input
          type="number"
          id="JUMLAH_BARANG"
          name="JUMLAH_BARANG"
          value={formData.JUMLAH_BARANG}
          onChange={handleChange}
          placeholder="Masukkan jumlah barang"
          required
        />

        <label htmlFor="TANGGAL_BOOKING">Tanggal Booking:</label>
        <input
          type="date"
          id="TANGGAL_BOOKING"
          name="TANGGAL_BOOKING"
          value={formData.TANGGAL_BOOKING}
          onChange={handleChange}
          required
        />

        <label htmlFor="WAKTU_BOOKING">Waktu Booking:</label>
        <input
          type="time"
          id="WAKTU_BOOKING"
          name="WAKTU_BOOKING"
          value={formData.WAKTU_BOOKING}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">
          Pesan Sekarang
        </button>
      </form>
    </div>
  );
};

export default PesanKemasan;
