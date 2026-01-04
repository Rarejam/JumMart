import { useState } from "react";

const Checkout = () => {
  // Example cart data (replace with your cart later)
  const [cartItems] = useState([
    { id: 1, name: "Sneakers", price: 45000, quantity: 1 },
    { id: 2, name: "Jacket", price: 32000, quantity: 2 },
  ]);

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePayment = (e) => {
    e.preventDefault();
    if (!cardNumber || !expiry || !cvv) return;
    // You can integrate real payment later
    setPaymentSuccess(true);
    setCardNumber("");
    setExpiry("");
    setCvv("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col gap-6 items-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Checkout</h1>

      {/* Cart Items */}
      <div className="bg-white rounded-md p-4 shadow-md w-full max-w-2xl flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-gray-800">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-700">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-200 rounded-md p-2"
            >
              <span className="text-gray-800 font-medium">{item.name}</span>
              <span className="text-gray-700">
                {item.quantity} x ₦{item.price.toLocaleString()}
              </span>
            </div>
          ))
        )}
        <div className="flex justify-between mt-2 font-bold text-gray-800">
          <span>Total:</span>
          <span>₦{totalPrice.toLocaleString()}</span>
        </div>
      </div>

      {/* Payment Form */}
      <form
        onSubmit={handlePayment}
        className="bg-gray-300 p-6 rounded-md w-full max-w-2xl flex flex-col gap-4 shadow-md"
      >
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Payment Details
        </h2>

        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="border border-gray-400 rounded-md p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="border border-gray-400 rounded-md p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Confirm Payment
        </button>

        {paymentSuccess && (
          <p className="text-green-600 font-medium text-center mt-2">
            Payment Successful! Thank you for your purchase.
          </p>
        )}
      </form>
    </div>
  );
};

export default Checkout;
