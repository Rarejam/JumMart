import { Link } from "react-router-dom";

const LandingFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-24">
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* BRAND */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-white">
            ACTIVE<span className="text-purple-500">iate</span>
          </h2>
          <p className="text-sm text-gray-400">
            A modern marketplace to buy, sell, chat, and manage everything in
            one secure platform.
          </p>
        </div>

        {/* PRODUCT */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Product</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Marketplace</li>
            <li className="hover:text-white cursor-pointer">Wishlist</li>
            <li className="hover:text-white cursor-pointer">Secure Checkout</li>
            <li className="hover:text-white cursor-pointer">Messaging</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">How It Works</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms of Service
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Get Started</h3>
          <p className="text-sm text-gray-400">
            Create an account and start buying or selling today.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="#signup"
              className="bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold py-2 rounded text-center transition"
            >
              Sign Up
            </a>

            <a
              href="#login"
              className="border border-gray-600 hover:bg-gray-800 text-sm py-2 rounded text-center transition"
            >
              Login
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} ACTIVEiate. All rights reserved.
      </div>
    </footer>
  );
};

export default LandingFooter;
