import { Link, Outlet } from "react-router-dom";
// import reacticon from "../assets/react.svg";
import homeIcon from "../Home/homeIcon.svg";
import categoryIcon from "../Categories/categoryIcon.svg";
import cartIcon from "../Cart/cartIcon.svg";
import wishlistIcon from "../Wishlist/favorite.svg";
import accountIcon from "../Account/accountIcon.svg";

const Market = () => {
  return (
    <div className="min-h-full relative">
      <Outlet />

      <div
        className="fixed bottom-[16vh] right-6 z-50
         sm:h-12 sm:w-12 sm:right-4
             h-12 w-12 rounded-full
             bg-purple-500 text-white
             flex items-center justify-center
             shadow-lg cursor-pointer
             hover:scale-110  active:scale-95 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </div>

      {/* //footer div */}
      <div className="bg-black sticky bottom-0 w-full border-t border-gray-700 sm:min-h-[72px] min-h-[10vh] p-2 flex justify-around items-center">
        <Link
          to="/market"
          className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-[0.7rem] sm:text-[0.75rem] md:text-[0.85rem] text-white cursor-pointer flex flex-col justify-center items-center rounded-2xl sm:rounded-2xl hover:bg-gradient-to-br from-purple-500 to-pink-500 hover:shadow-lg transition mx-1 sm:mx-2 font-semibold"
        >
          <img src={homeIcon} alt="react" />
          Home
        </Link>
        <Link
          to="/market/categories"
          className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-20 text-[0.7rem] sm:text-[0.75rem] md:text-[0.85rem] text-white cursor-pointer flex flex-col justify-center items-center rounded-2xl sm:rounded-2xl hover:bg-gradient-to-br from-purple-500 to-pink-500 hover:shadow-lg transition mx-1 sm:mx-2 font-semibold"
        >
          <img src={categoryIcon} alt="react" />
          Categories
        </Link>
        <Link
          to="/market/cart"
          className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-[0.7rem] sm:text-[0.75rem] md:text-[0.85rem] text-white cursor-pointer flex flex-col justify-center items-center rounded-2xl sm:rounded-2xl hover:bg-gradient-to-br from-purple-500 to-pink-500 hover:shadow-lg transition mx-1 sm:mx-2 font-semibold"
        >
          <img src={cartIcon} alt="react" />
          Cart
        </Link>
        <Link
          to="/market/wishlist"
          className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-[0.7rem] sm:text-[0.75rem] md:text-[0.85rem] text-white cursor-pointer flex flex-col justify-center items-center rounded-2xl sm:rounded-2xl hover:bg-gradient-to-br from-purple-500 to-pink-500 hover:shadow-lg transition mx-1 sm:mx-2 font-semibold"
        >
          <img src={wishlistIcon} alt="react" />
          Wishlist
        </Link>
        <Link
          to="/market/account"
          className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-[0.7rem] sm:text-[0.75rem] md:text-[0.85rem] text-white cursor-pointer flex flex-col justify-center items-center rounded-2xl sm:rounded-2xl hover:bg-gradient-to-br from-purple-500 to-pink-500 hover:shadow-lg transition mx-1 sm:mx-2 font-semibold"
        >
          <img src={accountIcon} alt="react" />
          Account
        </Link>
      </div>
    </div>
    // <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10 bg-gray-400 min-h-screen">
    //   <div className="h-96 w-full max-w-[320px] bg-gray-100"></div>
    //   <div className="h-96 w-full max-w-[320px] bg-gray-100"></div>
    //   <div className="h-96 w-full max-w-[320px] bg-gray-100"></div>
    //   <div className="h-96 w-full max-w-[320px] bg-gray-100"></div>
    //   <div className="h-96 w-full max-w-[320px] bg-gray-100"></div>
    //   <div className="h-96 w-full max-w-[320px] bg-gray-100"></div>
    //   <div className="h-96 w-full max-w-[320px] bg-gray-100"></div>
    //   <div className="h-96 w-full max-w-[320px] bg-gray-100"></div>
    //   <div className="h-96 w-full max-w-[320px] bg-gray-100"></div>
    //   <div className="h-96 w-full max-w-[320px] bg-gray-100"></div>
    //   <div className="h-96 w-full max-w-[320px] bg-gray-100"></div>
    //   <div className="h-96 w-full max-w-[320px] bg-gray-100"></div>
    // </div>
  );
};

export default Market;
