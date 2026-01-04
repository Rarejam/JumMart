import { Link } from "react-router-dom";
import reacticon from "../assets/react.svg";

const products = [
  {
    id: 1,
    name: "Phone",
    priceRange: "$44,544 - $46,622",
    oldPrice: null,
  },
  {
    id: 2,
    name: "Phone",
    priceRange: "$44,544 - $46,622",
    oldPrice: null,
  },
  {
    id: 3,
    name: "Phone",
    priceRange: "$44,544 - $46,622",
    oldPrice: null,
  },
  {
    id: 4,
    name: "Phone",
    priceRange: "$44,544 - $46,622",
    oldPrice: null,
  },
  {
    id: 5,
    name: "Phone",
    priceRange: "$44,544 - $46,622",
    oldPrice: null,
  },
  {
    id: 6,
    name: "Phone",
    priceRange: "$44,544 - $46,622",
    oldPrice: "$44,544",
  },
  {
    id: 7,
    name: "Phone",
    priceRange: "$44,544 - $46,622",
    oldPrice: null,
  },
];

const Carousel = () => {
  return (
    <div className="min-h-fit m-1 rounded-md">
      <div
        className="bg-gray-800 flex items-center gap-4 h-[30vh] justify-start
        overflow-x-auto px-4 flex-nowrap scrollbar-thin scrollbar-thumb-gray-900 rounded-md"
      >
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/market/product/${product.id}`}
            className="h-[8rem] w-[8rem] sm:h-[10rem] sm:w-[10rem] flex-shrink-0
            bg-white hover:scale-105 hover:drop-shadow-2xl
            transition-transform transition-shadow duration-300 ease-in-out
            flex flex-col items-center justify-center rounded-lg p-2 cursor-pointer"
          >
            <img
              src={reacticon}
              className="h-16 sm:h-20 w-16 sm:w-20 object-contain mb-2"
              alt="icon"
            />

            <div className="text-sm sm:text-base text-gray-800 text-center flex flex-col items-center">
              <p className="text-sm sm:text-base font-light">{product.name}</p>

              <p className="text-xs sm:text-sm font-bold text-gray-600">
                {product.priceRange}
              </p>

              {product.oldPrice && (
                <p className="text-xs sm:text-sm font-light line-through text-gray-600">
                  {product.oldPrice}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
