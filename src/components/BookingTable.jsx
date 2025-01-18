import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/BookingTable.css'; 
const BookingTable = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bookings'); // Adjust the URL as needed
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Booking Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID Booking</th>
            <th>ID Customer</th>
            <th>ID Produk</th>
            <th>Jumlah Barang</th>
            <th>Tanggal Booking</th>
            <th>Waktu Booking</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.ID_BOOKING}>
              <td>{booking.ID_BOOKING}</td>
              <td>{booking.ID_CUSTOMER}</td>
              <td>{booking.ID_PRODUK}</td>
              <td>{booking.JUMLAH_BARANG}</td>
              <td>{booking.TANGGAL_BOOKING}</td>
              <td>{booking.WAKTU_BOOKING}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
