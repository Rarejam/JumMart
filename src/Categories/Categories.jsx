import { Outlet } from "react-router-dom";
import reactIcon from "../assets/react.svg";
import Content from "./Content";
import SideBar from "./sideBar";

const Categories = () => {
  return (
    <div>
      {/* //header */}
      <div className="bg-black h-[15vh] px-4 flex items-center">
        <div className="w-full max-w-6xl mx-auto flex items-center gap-3">
          {/* Logo / Title */}
          <div className="text-white font-bold text-lg sm:text-xl whitespace-nowrap">
            Market
          </div>

          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search products..."
              className="
                  w-full
                  h-10 sm:h-11
                  px-4
                  rounded-full
                  text-sm 
                  outline-none
                  bg-white
                  focus:ring-2 focus:ring-purple-400
                "
            />
          </div>

          {/* Optional icon (hidden on small screens) */}
          <div className="hidden sm:flex items-center">
            <img src={reactIcon} alt="user" className="h-8 w-8" />
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col sm:flex-row bg-red-200">
        {/* Sidebar */}
        <SideBar prop={"contents"} />

        {/* CONTENT */}
        {/* <Content prop={"content"} /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Categories;
