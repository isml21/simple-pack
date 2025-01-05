import React from 'react';
// import '../style/Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Masukkan email Anda" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Masukkan password Anda" required />
          </div>
          <button type="submit" className="submit-btn">Login</button>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
