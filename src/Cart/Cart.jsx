import reactIcon from "../assets/react.svg";

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 p-4 border-b border-gray-300 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Your Cart
        </h2>
        <p className="text-sm sm:text-base text-gray-500 mt-2 sm:mt-0">
          3 items in your cart
        </p>
      </div>

      {/* Cart Items */}
      <div className="mt-4 grid gap-4">
        {/* Cart Item */}
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row items-center gap-4 hover:shadow-lg transition">
          <img
            src={reactIcon}
            alt="product"
            className="h-24 w-24 sm:h-32 sm:w-32 object-contain rounded-md"
          />
          <div className="flex-1 flex flex-col justify-between w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center w-full">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                Sneakers
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-1 sm:mt-0">
                $45,000
              </p>
            </div>

            {/* Quantity Control */}
            <div className="flex items-center gap-2 mt-2">
              <button className="px-3 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition">
                -
              </button>
              <span className="text-gray-800 font-medium">1</span>
              <button className="px-3 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition">
                +
              </button>
            </div>
          </div>
        </div>

        {/* Duplicate Cart Item */}
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row items-center gap-4 hover:shadow-lg transition">
          <img
            src={reactIcon}
            alt="product"
            className="h-24 w-24 sm:h-32 sm:w-32 object-contain rounded-md"
          />
          <div className="flex-1 flex flex-col justify-between w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center w-full">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                Jacket
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-1 sm:mt-0">
                $32,000
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <button className="px-3 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition">
                -
              </button>
              <span className="text-gray-800 font-medium">2</span>
              <button className="px-3 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition">
                +
              </button>
            </div>
          </div>
        </div>

        {/* Cart Total */}
        <div className="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center text-gray-800 font-bold text-lg sm:text-xl">
          <span>Total:</span>
          <span>$109,000</span>
        </div>

        {/* Checkout Button */}
        <button className="w-full bg-purple-600 text-white font-bold py-3 rounded hover:bg-purple-700 transition text-lg sm:text-xl">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
