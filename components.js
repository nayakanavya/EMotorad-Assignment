// src/components/Login.js
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Login = () => {
  const handleLoginSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/google', {
        token: credentialResponse.credential,
      });
      localStorage.setItem('token', res.data.token);
      window.location.href = '/';
    } catch (error) {
      console.error('Login Failed:', error);
    }
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />
    </div>
  );
};

export default Login;
