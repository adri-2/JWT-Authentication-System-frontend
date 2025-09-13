import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // <-- ajouté
  const [isLoading, setIsLoading] = useState(false); // <-- ajouté

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const payload = { email, password };
      const res = await axios.post("http://localhost:8000/api/login/", payload);

      setIsLoading(false);

      const user = { email: res.data.email, full_name: res.data.full_name };
      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("access", JSON.stringify(res.data.access_token));
        localStorage.setItem("refresh", JSON.stringify(res.data.refresh_token));
        toast.success(res.data.message || "Login successful!");
        navigate("/profile");
      } else {
        toast.error(res.data.error || "Invalid credentials.");
      }
    } catch (err) {
      setIsLoading(false);
      if (err.response) {
        console.log("Backend error:", err.response.data);
        toast.error(JSON.stringify(err.response.data));
      } else {
        toast.error("Server unreachable. Check your backend URL.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        {isLoading && <p>Loading ....</p>}
        {error && <p className="text-red-600 mb-4">{error}</p>}

        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4 flex flex-col items-start justify-start">
          <label htmlFor="email" className="block mb-1 text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="username"
          />
        </div>

        <div className="mb-6 items-start justify-start flex flex-col">
          <label htmlFor="password" className="block mb-1 text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
