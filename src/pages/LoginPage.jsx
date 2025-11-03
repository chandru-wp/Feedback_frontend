 import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const validUser = "Admin";
    const validPass = "12345";

    if (formData.username === validUser && formData.password === validPass) {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin-feedback"); // ✅ Redirect to admin feedback page
    } else {
      setError("❌ Invalid username or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-a7a4a6  px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Admin Login</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="text-left">
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter username"
            />
          </div>

          <div className="text-left">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter password"
            />
          </div>
          <div>
        
          <div className=' text-sm text-gray-500 mt-1'>Username : Admin
          </div>
           <div className=' text-sm text-gray-500 mt-1'>Password : 12345
          </div></div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <button
          onClick={() => navigate("/")}
          className="mt-4 text-blue-600 hover:underline"
        >
          ← Back to Feedback
        </button>
      </div>
    </div>
  );
}
