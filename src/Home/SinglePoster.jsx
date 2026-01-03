import reactIcon from "../assets/react.svg";

const SinglePoster = () => {
  return (
    <div className="bg-gray-200 p-2 m-1 flex flex-col sm:flex-row gap-2 rounded-md">
      {/* Poster 2 */}
      <div
        className="
          relative
          h-40 sm:h-64
          w-full sm:w-full
          rounded-md
          overflow-hidden
          cursor-pointer
          hover:scale-[1.01]
          transition-transform duration-300
          flex items-center justify-center
        "
        style={{
          backgroundImage: `url(${reactIcon})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* text */}
        <div className="relative z-0 text-center">
          <p className="text-xl sm:text-3xl font-semibold text-white">Men's</p>
          <p className="text-4xl sm:text-6xl font-extrabold text-white leading-none">
            Fashion
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePoster;
