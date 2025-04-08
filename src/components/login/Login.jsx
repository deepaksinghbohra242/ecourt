import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Login() {
  const [redirect, setRedirect] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setRedirect(true); // Set redirect state to true
  }

  if (redirect) {
    return <Navigate to="/dashboard/cases" />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-xl">
        <div className="flex justify-center font-bold text-2xl mb-6">
          Ecourt Management
        </div>
        <form onSubmit={onSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-800 font-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-800 font-bold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded hover:bg-indigo-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
