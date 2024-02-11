// src/components/Signup.tsx
import React, { useState } from 'react';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Handle signup logic here
    console.log('Signing up with:', email, password);
  };

  return (
    <div className="max-w-sm mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Sign Up</h1>
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
          onClick={handleSignup}
          className="w-full bg-blue-500 text-white py-2 rounded-md transition duration-300 hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
