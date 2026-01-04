import reactIcon from "../assets/react.svg";

const Grid = () => {
  const products = [
    { name: "Phone", price: "$44,544" },
    { name: "Phone", price: "$44,544" },
    { name: "Phone", price: "$44,544" },
    { name: "Phone", price: "$44,544" },
    { name: "Phone", price: "$44,544" },
    { name: "Phone", price: "$44,544" },
    { name: "Phone", price: "$44,544" },
    { name: "Phone", price: "$44,544" },
    { name: "Phone", price: "$44,544" },
    { name: "Phone", price: "$44,544" },
    { name: "Phone", price: "$44,544" },
    { name: "Phone", price: "$44,544" },
  ];

  return (
    <div className="grid m-1 rounded-md grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 sm:gap-3 p-2 sm:p-4 bg-gray-800 min-h-full">
      {products.map((item, i) => (
        <div
          key={i}
          className="
            h-44 sm:h-52
            bg-white rounded-md
            flex flex-col items-center justify-center
            p-3 gap-1
            cursor-pointer
            transition-all duration-300 ease-out
            hover:scale-[1.03] hover:shadow-xl
          "
        >
          <img
            src={reactIcon}
            className="h-36 sm:h-36 w-66 sm:w-56 object-contain"
            alt="icon"
          />

          <div className="flex flex-col items-center text-center">
            <p className="text-sm sm:text-base font-medium text-gray-800">
              {item.name}
            </p>
            <p className="text-xs sm:text-sm font-light text-gray-600">
              {item.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
