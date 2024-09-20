import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await axios.post(`${backendUrl}/company/api/token/`, {
        email,
        password,
      });
      // Aquí deberías guardar el token JWT en el localStorage o en el state
      localStorage.setItem('token', response.data.access);
      navigate('/dashboard');
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-3/4 max-w-md">
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold">Welcome back</h1>
            <p class="text-balance text-muted-foreground">Enter your email below to login to your account.</p>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && <p className="text-red-500">{error}</p>}
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
            <a href="/signup" className="text-blue-500 hover:underline">Don't have an account? Register here</a>
          </form>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://tu-imagen.com/image.jpg')" }}>
        {/* Imagen a la derecha solo en pantallas medianas en adelante */}
      </div>
    </div>
  );
};

export default LoginForm;
