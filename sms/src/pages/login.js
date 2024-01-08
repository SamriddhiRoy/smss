import React from 'react';

const LoginForm = () => {
  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded-md shadow-md">
      <div className="flex items-center justify-center mb-6">
          {/* Logo or any image */}
          <img src="logo.png" alt="Logo" className="h-16 w-16" />
        </div>
        <form>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Username</label>
            <input
              type="text"
              name="username"
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


LoginForm.layout="Authentication"
export default LoginForm;
