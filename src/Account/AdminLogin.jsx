import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin123") {
      // example password
      navigate("/market/account/admin/dashboard");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleLogin}
        className="bg-gray-300 p-6 rounded-md w-full max-w-sm flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Admin Login
        </h1>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {error && <p className="text-red-600">{error}</p>}
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
