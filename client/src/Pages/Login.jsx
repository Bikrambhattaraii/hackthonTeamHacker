import React, { useState } from 'react';
import '../Styles/Login.css';
import left from "../assets/logo.png" 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password') {

      window.location.href = '/dashboard';
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='main-login-container'>
        <img src={left} alt="image" />
    <div className="login-container">
      <h2 style={{textAlign:'center'}}>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <span className="form-label">Username:</span>
          <input
            type="text"
            className='input-field'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <span className="form-label">Password:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
    </div>
  );
}

export default Login;
