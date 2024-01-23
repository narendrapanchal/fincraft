
import React, { useContext, useState } from 'react';
import '../styles/login.css';
import {AuthContext} from "../context/AuthContextProvider"
import { useNavigate } from 'react-router-dom';
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {login}=useContext(AuthContext);
  const navigate=useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === '' && password === '') {
      alert('Invalid credentials. Please try again.');
    } else {
      login(username)
      navigate("/")
    }
  };

  return (
    <div class="login-container">
    <h2>Login</h2>
    <form class="login-form" onSubmit={handleLogin}>
      <label class="form-label">
        Username:
        <input type="text" class="form-input" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label class="form-label">
        Password:
        <input type="password" class="form-input" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit" class="login-button">
        Login
      </button>
    </form>
  </div>
  
  );
};

export default Login;
