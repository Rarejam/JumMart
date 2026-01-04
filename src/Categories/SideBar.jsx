import fashionIcon from "./assets/fashionIcon.svg";
import babyProductsIcon from "./assets/babyProducts.svg";
import electronicsIcon from "./assets/electronics.svg";
import gamingIcon from "./assets/gaming.svg";
import groceryIcon from "./assets/groceryIcon.svg";
import healthProductsIcon from "./assets/healthProducts.svg";
import phoneIcon from "./assets/phones.svg";

import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-gray-300 border-2 w-full sm:w-[30%] flex flex-col">
      <NavLink
        to="/market/categories"
        className="flex-1 p-3 sm:p-4 bg-gray-800 text-white text-base sm:text-xl flex items-center gap-3 hover:border-l-4 border-white transition"
      >
        <img src={fashionIcon} alt="Fashion" className="w-6 h-6" />
        <span>Fashion</span>
      </NavLink>

      <NavLink
        to="/market/categories/gaming"
        className="flex-1 p-3 sm:p-4 bg-gray-800 text-white text-base sm:text-xl flex items-center gap-3 hover:border-l-4 border-white transition"
      >
        <img src={gamingIcon} alt="Gaming" className="w-6 h-6" />
        <span>Gaming</span>
      </NavLink>

      <NavLink
        to="/market/categories/health"
        className="flex-1 p-3 sm:p-4 bg-gray-800 text-white text-base sm:text-xl flex items-center gap-3 hover:border-l-4 border-white transition"
      >
        <img src={healthProductsIcon} alt="Health" className="w-6 h-6" />
        <span>Health and Beauty</span>
      </NavLink>

      <NavLink
        to="/market/categories/grocery"
        className="flex-1 p-3 sm:p-4 bg-gray-800 text-white text-base sm:text-xl flex items-center gap-3 hover:border-l-4 border-white transition"
      >
        <img src={groceryIcon} alt="Grocery" className="w-6 h-6" />
        <span>Grocery</span>
      </NavLink>

      <NavLink
        to="/market/categories/baby-products"
        className="flex-1 p-3 sm:p-4 bg-gray-800 text-white text-base sm:text-xl flex items-center gap-3 hover:border-l-4 border-white transition"
      >
        <img src={babyProductsIcon} alt="Baby Products" className="w-6 h-6" />
        <span>Baby Products</span>
      </NavLink>

      <NavLink
        to="/market/categories/phones"
        className="flex-1 p-3 sm:p-4 bg-gray-800 text-white text-base sm:text-xl flex items-center gap-3 hover:border-l-4 border-white transition"
      >
        <img src={phoneIcon} alt="Phones" className="w-6 h-6" />
        <span>Phones and Tablets</span>
      </NavLink>

      <NavLink
        to="/market/categories/Electronics"
        className="flex-1 p-3 sm:p-4 bg-gray-800 text-white text-base sm:text-xl flex items-center gap-3 hover:border-l-4 border-white transition"
      >
        <img src={electronicsIcon} alt="Electronics" className="w-6 h-6" />
        <span>Electronics</span>
      </NavLink>
    </div>
  );
};

export default SideBar;
