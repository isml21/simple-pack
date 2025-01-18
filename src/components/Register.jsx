import React, { useState } from 'react';
import { registerUser } from '../api'; 
import '../style/Register.css';


const Register = () => {
  const [formData, setFormData] = useState({
    NAMA_CUSTOMER: '',
    NO_TELFON: '',
    ALAMAT: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      alert(response.message);
      setFormData({
        NAMA_CUSTOMER: '',
        NO_TELFON: '',
        ALAMAT: '',
      });
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Terjadi kesalahan saat mendaftar. Silakan coba lagi.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="NAMA_CUSTOMER">Nama Customer:</label>
        <input
          type="text"
          id="NAMA_CUSTOMER"
          name="NAMA_CUSTOMER"
          value={formData.NAMA_CUSTOMER}
          onChange={handleChange}
          required
        />

        <label htmlFor="NO_TELFON">No Telepon:</label>
        <input
          type="text"
          id="NO_TELFON"
          name="NO_TELFON"
          value={formData.NO_TELFON}
          onChange={handleChange}
        />

        <label htmlFor="ALAMAT">Alamat:</label>
        <input
          type="text"
          id="ALAMAT"
          name="ALAMAT"
          value={formData.ALAMAT}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
