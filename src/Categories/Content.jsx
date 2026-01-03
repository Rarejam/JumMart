import { Link } from "react-router-dom";
import reactIcon from "../assets/react.svg";

const Content = ({ title, category }) => {
  // Example product data
  const products = [
    { id: 1, name: "Sneakers", price: "$45,000" },
    { id: 2, name: "Jacket", price: "$32,000" },
    { id: 3, name: "T-Shirt", price: "$8,500" },
    { id: 4, name: "Jeans", price: "$18,000" },
  ];

  return (
    <div className="w-full sm:w-[70%] bg-gray-100 overflow-y-auto min-h-screen">
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 p-4 border-b">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">Category: {category}</p>
        <p className="text-sm text-gray-500">Top picks curated for you</p>
      </div>

      {/* Products Grid */}
      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/market/product/${product.id}`}
            className="bg-white rounded-lg p-3 hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={reactIcon}
              alt={product.name}
              className="h-24 mx-auto object-contain"
            />
            <p className="text-sm font-medium mt-2">{product.name}</p>
            <p className="text-xs text-gray-500">{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Content;
