// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link untuk navigasi

// const Register = () => {
//   return (
//     <div className="register-page">
//       <div className="register-container">
//         <h1>Registrasi</h1>
//         <form>
//           <div className="form-group">
//             <label htmlFor="name">Nama</label>
//             <input type="text" id="name" placeholder="Masukkan nama Anda" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" placeholder="Masukkan email Anda" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" placeholder="Masukkan password Anda" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="confirm-password">Konfirmasi Password</label>
//             <input type="password" id="confirm-password" placeholder="Konfirmasi password Anda" required />
//           </div>
//           <button type="submit" className="submit-btn">Daftar</button>
//         </form>
//         <p className="login-link">
//           Sudah punya akun? <Link to="/login">Kembali ke Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// // CSS Styles
// const styles = `
//   .register-page {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//     background-color: #f4f4f4;
//   }
  
//   .register-container {
//     background-color: white;
//     padding: 30px;
//     border-radius: 10px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     width: 100%;
//     max-width: 400px;
//   }
  
//   h1 {
//     text-align: center;
//     color: #4a90e2;
//   }
  
//   .form-group {
//     margin-bottom: 20px;
//   }
  
//   label {
//     display: block;
//     margin-bottom: 8px;
//     font-size: 1rem;
//     color: #333;
//   }
  
//   input {
//     width: 100%;
//     padding: 10px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//   }
  
//   .submit-btn {
//     background-color: #21cac2;
//     color: white;
//     width: 100%;
//     padding: 10px;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//   }
  
//   .submit-btn:hover {
//     background-color: #357ab8;
//   }
  
//   .login-link {
//     text-align: center;
//     margin-top: 15px;
//     font-size: 0.9rem;
//     color: #333;
//   }
  
//   .login-link a {
//     color: #4a90e2;
//     text-decoration: none;
//   }
  
//   .login-link a:hover {
//     text-decoration: underline;
//   }
  
//   .error {
//     color: red;
//     font-size: 0.9rem;
//     text-align: center;
//   }
// `;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Register;