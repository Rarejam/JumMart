import { useState } from "react";

const LoginSection = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", credentials);
    // later → auth request
  };

  return (
    <section id="login" className="py-24 px-6 bg-gray-200">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-12 items-start">
        {/* LEFT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md mt-8"
        >
          <h4 className="text-2xl font-bold mb-6">Welcome Back</h4>

          <input
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4"
          />

          <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded transition">
            Login
          </button>
        </form>

        {/* RIGHT DETAILS */}
        <div className="mt-20">
          <h3 className="text-3xl font-extrabold mb-4">
            Access your <span className="text-purple-500">Account</span>
          </h3>
          <p className="text-gray-600 mb-6">
            Orders, payments, inbox, and wishlist — all in one place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
