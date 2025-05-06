"use client";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✨ NEW handleSubmit here
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        localStorage.setItem("username", data.username); 
        window.location.href = "/test"; 
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter username"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
