import { useState } from "react";

const SignupSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", form);
    // later → send to backend
  };

  return (
    <section id="signup" className="py-24 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-12 items-start">
        {/* LEFT DETAILS */}
        <div className="mt-12">
          <h3 className="text-3xl font-extrabold mb-4">
            Join <span className="text-purple-500">ACTIVEiate</span>
          </h3>
          <p className="text-gray-600 mb-6">
            Create an account to manage orders, wishlist, and chat with sellers.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>✔ Secure payments</li>
            <li>✔ Wishlist & inbox</li>
            <li>✔ Seller contact</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h4 className="text-2xl font-bold mb-6">Create Account</h4>

          <input
            name="firstName"
            placeholder="First name"
            value={form.firstName}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4"
          />

          <input
            name="lastName"
            placeholder="Last name"
            value={form.lastName}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4"
          />

          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4"
          />

          <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded transition">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignupSection;
