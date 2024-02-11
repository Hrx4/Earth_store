// src/components/Login.tsx
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="max-w-sm mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Login</h1>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        />
        <button
          type="button"
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded-md transition duration-300 hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
