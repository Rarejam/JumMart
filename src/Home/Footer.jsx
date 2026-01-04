const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-2">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white">YourStore</h2>
          <p className="text-sm text-gray-400">
            A modern marketplace built for simplicity, speed, and secure
            shopping.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Account */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-white">Account</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">My Orders</li>
            <li className="hover:text-white cursor-pointer">Payments</li>
            <li className="hover:text-white cursor-pointer">Help & Support</li>
            <li className="hover:text-white cursor-pointer">Admin</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-white">Contact</h3>
          <p className="text-sm text-gray-400">support@example.com</p>
          <p className="text-sm text-gray-400">+234 800 123 4567</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} JumMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
