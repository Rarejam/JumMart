import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-gray-300 border-2 w-full sm:w-[30%] flex flex-col">
      <NavLink
        to="/market/categories"
        className="flex-1 p-3 sm:p-4 bg-gray-800 text-white text-base sm:text-xl flex items-center hover:border-l-4 border-white transition"
      >
        Fashion
      </NavLink>

      <NavLink
        to="/market/categories/gaming"
        className="flex-1 p-3 sm:p-4 bg-gray-800 text-white text-base sm:text-xl flex items-center hover:border-l-4 border-white transition"
      >
        Gaming
      </NavLink>

      <NavLink
        to="/market/categories/health"
        className="flex-1 p-3 sm:p-4 bg-gray-800 text-white text-base sm:text-xl flex items-center hover:border-l-4 border-white transition"
      >
        Health and Beauty
      </NavLink>

      <NavLink
        to="/market/categories/grocery"
        className="flex-1 p-3 sm:p-4 bg-gray-800 text-white text-base sm:text-xl flex items-center hover:border-l-4 border-white transition"
      >
        Grocery
      </NavLink>

      <NavLink
        to="/market/categories/baby-products"
        className="flex-1 p-3 sm:p-4 bg-gray-800 text-white text-base sm:text-xl flex items-center hover:border-l-4 border-white transition"
      >
        Baby Products
      </NavLink>

      <NavLink
        to="/market/categories/phones"
        className="flex-1 p-3 sm:p-4 bg-gray-800 text-white text-base sm:text-xl flex items-center hover:border-l-4 border-white transition"
      >
        Phones and Tablets
      </NavLink>

      <NavLink
        to="/market/categories/Electronics"
        className="flex-1 p-3 sm:p-4 bg-gray-800 text-white text-base sm:text-xl flex items-center hover:border-l-4 border-white transition"
      >
        Electronics
      </NavLink>
    </div>
  );
};

export default SideBar;
