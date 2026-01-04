import { Link, Outlet } from "react-router-dom";
import aboutIcon from "./assets/about.svg";
import adminIcon from "./assets/admin.svg";
import cartIcon from "./assets/cart.svg";
import inboxIcon from "./assets/inbox.svg";
import paymentsIcon from "./assets/payments.svg";
import supportIcon from "./assets/support.svg";
import wishlistIcon from "./assets/wishlist.svg";
import logoutIcon from "./assets/logout.svg";

const Account = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col sm:flex-row gap-6">
      {/* Sidebar */}
      <div className="sm:w-1/3 bg-gray-300 rounded-md p-4 flex flex-col gap-3">
        <h1 className="text-xl font-bold text-gray-800 mb-1">Account</h1>
        <h3 className="text-sm text-gray-700">Scroll down to see details</h3>

        <Link
          to="/market/account/"
          className="p-3 bg-gray-800 text-white rounded-md flex items-center gap-3 hover:bg-gray-700 transition"
        >
          <img src={cartIcon} className="w-5 h-5" />
          <span>My Orders</span>
        </Link>

        <Link
          to="/market/wishlist"
          className="p-3 bg-gray-800 text-white rounded-md flex items-center gap-3 hover:bg-gray-700 transition"
        >
          <img src={wishlistIcon} className="w-5 h-5" />
          <span>Wishlist</span>
        </Link>

        <Link
          to="/market/account/payments"
          className="p-3 bg-gray-800 text-white rounded-md flex items-center gap-3 hover:bg-gray-700 transition"
        >
          <img src={paymentsIcon} className="w-5 h-5" />
          <span>Payments</span>
        </Link>

        <Link
          to="/market/account/support"
          className="p-3 bg-gray-800 text-white rounded-md flex items-center gap-3 hover:bg-gray-700 transition"
        >
          <img src={supportIcon} className="w-5 h-5" />
          <span>Help & Support</span>
        </Link>

        <Link
          to="/market/account/inbox"
          className="p-3 bg-gray-800 text-white rounded-md flex items-center gap-3 hover:bg-gray-700 transition"
        >
          <img src={inboxIcon} className="w-5 h-5" />
          <span>Inbox</span>
        </Link>

        <Link
          to="/market/account/admin"
          className="p-3 bg-gray-800 text-white rounded-md flex items-center gap-3 hover:bg-gray-700 transition"
        >
          <img src={adminIcon} className="w-5 h-5" />
          <span>Admin</span>
        </Link>

        <Link
          to="/market/account/about"
          className="p-3 bg-gray-800 text-white rounded-md flex items-center gap-3 hover:bg-gray-700 transition"
        >
          <img src={aboutIcon} className="w-5 h-5" />
          <span>About</span>
        </Link>

        <Link
          to="/"
          className="p-3 bg-gray-800 text-white rounded-md flex items-center gap-3 hover:bg-gray-700 transition"
        >
          <img src={logoutIcon} className="w-5 h-5" />
          <span>Logout</span>
        </Link>

        <Link
          to="/delete-account"
          className="p-3 bg-red-700 text-white rounded-md hover:bg-red-600 transition text-center"
        >
          Delete Account
        </Link>
      </div>

      {/* Content Area */}
      <div className="sm:w-2/3 bg-gray-300 rounded-md p-6 flex flex-col gap-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Account;
