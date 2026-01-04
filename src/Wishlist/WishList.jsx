import { useState } from "react";
import reactIcon from "../assets/react.svg";
import { Link } from "react-router-dom";

const WishList = () => {
  // Example wishlist items
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: "Sneakers", price: "$45,000" },
    { id: 2, name: "Jacket", price: "$32,000" },
    { id: 3, name: "T-Shirt", price: "$8,500" },
    { id: 3, name: "T-Shirt", price: "$8,500" },
    { id: 3, name: "T-Shirt", price: "$8,500" },
    { id: 3, name: "T-Shirt", price: "$8,500" },
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  if (wishlistItems.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-600 text-xl">
        Your wishlist is empty
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Your Wishlist
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-300 rounded-lg p-3 flex flex-col items-center relative hover:shadow-lg transition"
          >
            {/* Product Image */}
            <img
              src={reactIcon}
              alt={item.name}
              className="h-24 sm:h-32 object-contain mb-2"
            />

            {/* Product Info */}
            <p className="text-sm sm:text-base font-medium text-gray-800">
              {item.name}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">{item.price}</p>

            {/* Remove Button */}
            <button
              onClick={() => removeFromWishlist(item.id)}
              className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white py-1 rounded-md transition font-semibold text-sm"
            >
              Remove
            </button>

            {/* View Product */}
            <Link
              to={`/market/product/${item.id}`}
              className="mt-2 w-full text-center bg-purple-500 hover:bg-purple-600 text-white py-1 rounded-md transition font-semibold text-sm"
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
