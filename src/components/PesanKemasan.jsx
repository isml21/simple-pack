import React, { useState } from 'react';
import '../style/PesanKemasan.css';

const PesanKemasan = () => {
  const [formData, setFormData] = useState({
    namaProduk: '',
    jumlahPesanan: '',
    jenisKemasan: '',
    deskripsi: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pesanan untuk ${formData.namaProduk} telah diterima!`);
    console.log('Data Pesanan:', formData);
    setFormData({
      namaProduk: '',
      jumlahPesanan: '',
      jenisKemasan: '',
      deskripsi: '',
    });
  };

  return (
    <div className="pesan-kemasan-container">
      <h1>Pesan Kemasan</h1>
      <p>Isi formulir di bawah untuk memesan kemasan produk Anda.</p>
      <form onSubmit={handleSubmit} className="pesan-kemasan-form">
        <label htmlFor="namaProduk">Nama Produk:</label>
        <input
          type="text"
          id="namaProduk"
          name="namaProduk"
          value={formData.namaProduk}
          onChange={handleChange}
          placeholder="Masukkan nama produk Anda"
          required
        />

        <label htmlFor="jumlahPesanan">Jumlah Pesanan:</label>
        <input
          type="number"
          id="jumlahPesanan"
          name="jumlahPesanan"
          value={formData.jumlahPesanan}
          onChange={handleChange}
          placeholder="Masukkan jumlah pesanan"
          required
        />

        <label htmlFor="jenisKemasan">Jenis Kemasan:</label>
        <select
          id="jenisKemasan"
          name="jenisKemasan"
          value={formData.jenisKemasan}
          onChange={handleChange}
          required
        >
          <option value="">Pilih jenis kemasan</option>
          <option value="Standing Pouch">Standing Pouch</option>
          <option value="Flat Pouch">Flat Pouch</option>
          <option value="Spout Pouch">Spout Pouch</option>
        </select>

        <label htmlFor="deskripsi">Deskripsi Tambahan:</label>
        <textarea
          id="deskripsi"
          name="deskripsi"
          value={formData.deskripsi}
          onChange={handleChange}
          placeholder="Tambahkan deskripsi atau catatan"
          rows="5"
        />

        <button type="submit" className="submit-btn">
          Pesan Sekarang
        </button>
      </form>
    </div>
  );
};

export default PesanKemasan;
