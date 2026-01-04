import reactIcon from "../assets/react.svg";
// import homeIcon from "./homeIcon.svg";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Grid from "./Grid";
import Poster from "./Poster";
import SinglePoster from "./SinglePoster";
import Stores from "./Stores";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {" "}
      {/* <div className="bg-black h-[15vh]"></div> */}
      {/* //header */}
      <div className="bg-black w-screen h-[15vh] px-4 flex items-center">
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
          <button
            className="
                bg-purple-500
                text-white
                px-4
                sm:px-5
                h-10 sm:h-11
                font-semibold
                hover:bg-purple-600
                transition
                border border-purple-600
              "
          >
            Search
          </button>

          {/* Optional icon (hidden on small screens) */}
          <div className="hidden sm:flex items-center">
            <img src={reactIcon} alt="user" className="h-8 w-8" />
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col  overflow-x-hidden">
        <div
          className="

  h-[2.5rem]
  bg-gray-800
  flex items-center justify-center
  text-white
  text-sm sm:text-base
  text-center
  px-2
  m-1 font-bold rounded-md
"
        >
          CALL TO ORDER 08079196453, 08061441620
        </div>
        {/* top deals */}
        <div
          className="

  h-[2.5rem]
  bg-gray-800
  flex items-center justify-center 
  text-white  text-xl sm:text-2xl
 text-center
  px-2
  m-1 font-bold rounded-md
"
        >
          Fashion
        </div>

        {/* <Carousel /> */}

        <Carousel prop={"Fashion"} />

        {/* //Next display */}
        <Grid />

        {/* Poster section */}
        <Poster />

        {/* top deals */}
        <div className="bg-gray-900 m-1 rounded-md overflow-hidden">
          <div
            className="
      h-[2.75rem]
      flex items-center
      text-white
      text-xl sm:text-2xl
      px-4
      font-semibold
      bg-gray-800
      border-b border-gray-700
    "
          >
            Top Deals
          </div>

          <Carousel prop={"Top Deals"} />
        </div>

        {/* Fashion Extra */}
        <div className="bg-gray-900 m-1 rounded-md overflow-hidden">
          <div
            className="
      h-[2.75rem]
      flex items-center
      text-white
      text-xl sm:text-2xl
      px-4
      font-semibold
      bg-gray-800
      border-b border-gray-700
    "
          >
            Fashion Extra
          </div>

          <Carousel prop={"fashion"} />
        </div>

        {/* Official Stores */}
        <div
          className="

  h-[2.5rem]
  bg-gray-800
  flex items-center justify-center 
  text-white 
      text-xl sm:text-2xl
   text-center
  px-2
  m-1 font-semibold rounded-md
"
        >
          Official Stores
        </div>
        <Stores />

        {/* Single poster */}
        <SinglePoster />

        {/* New Arrival */}
        <div className="bg-gray-900 m-1 rounded-md overflow-hidden">
          <div
            className="
      h-[2.75rem]
      flex items-center
      text-white
      text-xl sm:text-2xl
      px-4
      font-semibold
      bg-gray-800
      border-b border-gray-700
    "
          >
            New Arrival
          </div>

          <Carousel prop={"New Arrival"} />
        </div>

        {/* Poster section */}
        <Poster prop={"shoes"} />

        {/* Poster section */}
        <Poster prop={"accessories"} />

        {/* Single poster */}
        <SinglePoster />

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
