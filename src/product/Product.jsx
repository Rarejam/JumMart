import reactIcon from "../assets/react.svg";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const ProductCard = () => {
  const { id } = useParams(); // get product id from URL
  const navigate = useNavigate();

  // Wishlist toggle
  const [wishlist, setWishlist] = useState(false);

  // Example product data (replace with backend fetch later)
  const productData = {
    1: {
      name: "Sneakers",
      price: "$45,000",
      oldPrice: "$42,500",
      sellerPhone: "+2348012345678",
    },
    2: {
      name: "Jacket",
      price: "$32,000",
      oldPrice: "$30,000",
      sellerPhone: "+2348098765432",
    },
    3: {
      name: "T-Shirt",
      price: "$8,500",
      oldPrice: "$7,500",
      sellerPhone: "+2348023456789",
    },
    4: {
      name: "Jeans",
      price: "$18,000",
      oldPrice: "$16,000",
      sellerPhone: "+2348034567890",
    },
  };

  const product = productData[id];
  if (!product) return <p className="p-4">Product not found</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col sm:flex-row gap-6">
      {/* Product Image */}
      <div className="sm:w-1/2 bg-gray-200 rounded-md flex items-center justify-center p-4 relative">
        <img
          src={reactIcon}
          alt={product.name}
          className="h-64 sm:h-80 w-64 sm:w-80 object-contain rounded-md"
        />

        {/* Wishlist Tick */}
        <button
          onClick={() => {
            setWishlist(!wishlist); // toggle wishlist
            if (!wishlist) {
              alert("Added to wishlist"); // show alert only when adding
            } else {
              alert("Removed from wishlist");
            }
          }}
          className={`absolute top-2 right-2 w-10 h-10 flex items-center justify-center rounded-full transition ${
            wishlist ? "bg-green-500 text-white" : "bg-red-900 text-white"
          }`}
        >
          {wishlist ? "✔" : "♡"}
        </button>
      </div>

      {/* Product Info */}
      <div className="sm:w-1/2 flex flex-col gap-4">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          {product.name}
        </h1>

        {/* Price */}
        <div className="flex items-center gap-2">
          <p className="text-gray-600 line-through text-sm sm:text-base">
            {product.oldPrice}
          </p>
          <p className="text-gray-800 font-bold text-lg sm:text-xl">
            {product.price}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base">
          This is a high-quality {product.name} with excellent features. Perfect
          for daily use, style, and comfort.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md transition">
            Add to Cart
          </button>

          <a
            href={`tel:${product.sellerPhone}`}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition text-center"
          >
            Call Seller
          </a>

          <button
            onClick={() => navigate(-1)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md transition text-center"
          >
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
