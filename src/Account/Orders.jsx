import { useState } from "react";

const Orders = () => {
  // Example orders data
  const [orders] = useState([
    { id: 1, product: "Sneakers", price: "$45,000", status: "Delivered" },
    { id: 2, product: "Jacket", price: "$32,000", status: "Pending" },
    { id: 3, product: "T-Shirt", price: "$8,500", status: "Shipped" },
    { id: 4, product: "Jeans", price: "$18,000", status: "Delivered" },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col gap-6">
      {/* Header */}
      <div className="bg-gray-300 rounded-md p-4">
        <h1 className="text-2xl font-bold text-gray-800">My Orders</h1>
        <p className="text-gray-700 mt-1">
          Track your orders and check their status.
        </p>
      </div>

      {/* Orders List */}
      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-md p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center shadow-md"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {order.product}
              </h2>
              <p className="text-gray-600">{order.price}</p>
            </div>
            <div>
              <span
                className={`px-3 py-1 rounded-full font-medium text-sm ${
                  order.status === "Delivered"
                    ? "bg-green-500 text-white"
                    : order.status === "Shipped"
                    ? "bg-yellow-400 text-white"
                    : "bg-purple-500 text-white"
                }`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
