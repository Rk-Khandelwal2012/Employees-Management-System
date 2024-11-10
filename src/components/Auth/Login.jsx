import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for error message

  const submitHandler = (e) => {
    e.preventDefault();
    
    // Call handleLogin and check if login is successful
    const isValid = handleLogin(email, password);
    if (!isValid) {
      setError('Invalid email or password'); // Set error message if login fails
    } else {
      setError(''); // Clear error on successful login
    }
    
    setEmail('');
    setPassword('');
  };

  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden">
      {/* Background and Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-50 hover:bg-opacity-80 transition-all duration-300 ease-in-out"></div>

      {/* Login Form */}
      <div className="flex h-screen w-screen items-center justify-center z-10">
        <div className="bg-gray-800 p-10 rounded-3xl shadow-xl w-96 transform transition-all duration-500 hover:scale-105 border border-teal-400">
          {/* Title */}
          <h2 className="text-4xl font-extrabold text-center text-white mb-6 tracking-tight">
            Employee Management System Login
          </h2>
          <p className="text-center text-white text-lg mb-4">
            Please enter your email and password to access the system.
          </p>

          <form onSubmit={(e) => submitHandler(e)} className="space-y-6">
            <div className="flex flex-col space-y-4">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="outline-none bg-transparent border-2 border-gray-600 py-4 px-5 text-xl text-white rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-teal-500 transition-all duration-300 ease-in-out shadow-xl transform hover:scale-105"
                type="email"
                placeholder="Email Address"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="outline-none bg-transparent border-2 border-gray-600 py-4 px-5 text-xl text-white rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-teal-500 transition-all duration-300 ease-in-out shadow-xl transform hover:scale-105"
                type="password"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-400 to-blue-600 text-white py-4 text-lg rounded-full shadow-xl hover:bg-teal-500 transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Log In
            </button>
          </form>

          {/* Alert Message */}
          {error && (
            <div className="mt-6 bg-red-600 text-white px-4 py-3 rounded-lg text-center shadow-lg">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
