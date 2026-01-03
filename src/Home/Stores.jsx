import reactIcon from "../assets/react.svg";

const Stores = () => {
  return (
    <div className="bg-gray-900 m-1 rounded-md overflow-hidden">
      {/* <div
        className="
      h-[2.75rem]
      flex items-center
      justify-center
      text-white
      text-xl sm:text-2xl
      px-4
      font-semibold
      bg-gray-800
      border-b border-gray-700
    "
      >
        Official Stores
      </div> */}

      {/* Horizontal stores row */}
      <div className="bg-gray-800 flex items-center gap-1 h-[30vh] justify-start overflow-x-auto px-4 flex-nowrap scrollbar-thin scrollbar-thumb-gray-900">
        {/* Store */}
        <div
          className="bg-gray-800 flex items-center gap-4 h-[30vh] justify-start
  px-2 flex-nowrap rounded-md"
        >
          <div
            className="
    relative
    h-[8rem] w-[8rem]
    sm:h-[8rem] sm:w-[14rem]
    flex-shrink-0
    rounded-lg
    overflow-hidden
    cursor-pointer
    hover:scale-105
    transition-transform duration-300
  "
            style={{
              backgroundImage: `url(${reactIcon})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* text */}
            <div className="relative z-10 h-full w-full flex items-center justify-center">
              <span className="text-white text-xl sm:text-2xl font-bold tracking-wide">
                Vennz
              </span>
            </div>
          </div>
        </div>

        {/* Store */}
        <div
          className="bg-gray-800 flex items-center gap-4 h-[30vh] justify-start
  px-2 flex-nowrap rounded-md"
        >
          <div
            className="
    relative
    h-[8rem] w-[8rem]
    sm:h-[8rem] sm:w-[14rem]
    flex-shrink-0
    rounded-lg
    overflow-hidden
    cursor-pointer
    hover:scale-105
    transition-transform duration-300
  "
            style={{
              backgroundImage: `url(${reactIcon})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* text */}
            <div className="relative z-10 h-full w-full flex items-center justify-center">
              <span className="text-white text-xl sm:text-2xl font-bold tracking-wide">
                Vennz
              </span>
            </div>
          </div>
        </div>

        {/* Store */}
        <div
          className="bg-gray-800 flex items-center gap-4 h-[30vh] justify-start
  px-2 flex-nowrap rounded-md"
        >
          <div
            className="
    relative
    h-[8rem] w-[8rem]
    sm:h-[8rem] sm:w-[14rem]
    flex-shrink-0
    rounded-lg
    overflow-hidden
    cursor-pointer
    hover:scale-105
    transition-transform duration-300
  "
            style={{
              backgroundImage: `url(${reactIcon})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* text */}
            <div className="relative z-10 h-full w-full flex items-center justify-center">
              <span className="text-white text-xl sm:text-2xl font-bold tracking-wide">
                Vennz
              </span>
            </div>
          </div>
        </div>

        {/* Store */}
        <div
          className="bg-gray-800 flex items-center gap-4 h-[30vh] justify-start
  px-2 flex-nowrap rounded-md"
        >
          <div
            className="
    relative
    h-[8rem] w-[8rem]
    sm:h-[8rem] sm:w-[14rem]
    flex-shrink-0
    rounded-lg
    overflow-hidden
    cursor-pointer
    hover:scale-105
    transition-transform duration-300
  "
            style={{
              backgroundImage: `url(${reactIcon})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* text */}
            <div className="relative z-10 h-full w-full flex items-center justify-center">
              <span className="text-white text-xl sm:text-2xl font-bold tracking-wide">
                Vennz
              </span>
            </div>
          </div>
        </div>

        {/* Store */}
        <div
          className="bg-gray-800 flex items-center gap-4 h-[30vh] justify-start
  px-2 flex-nowrap rounded-md"
        >
          <div
            className="
    relative
    h-[8rem] w-[8rem]
    sm:h-[8rem] sm:w-[14rem]
    flex-shrink-0
    rounded-lg
    overflow-hidden
    cursor-pointer
    hover:scale-105
    transition-transform duration-300
  "
            style={{
              backgroundImage: `url(${reactIcon})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* text */}
            <div className="relative z-10 h-full w-full flex items-center justify-center">
              <span className="text-white text-xl sm:text-2xl font-bold tracking-wide">
                Vennz
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stores;
