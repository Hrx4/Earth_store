// src/App.tsx
import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';


enum AuthMode {
  Login,
  Signup,
}

const Profile= () => {
  const [authMode, setAuthMode] = useState(AuthMode.Login);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-gray-200 p-8 rounded-md shadow-md">
        {authMode === AuthMode.Login ? <Login /> : <Signup />}
        <p className="mt-4 text-center">
          {authMode === AuthMode.Login ? (
            <>
              Don't have an account?{' '}
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setAuthMode(AuthMode.Signup)}
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setAuthMode(AuthMode.Login)}
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Profile;
