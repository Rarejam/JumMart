const Payment = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col gap-6">
      {/* Header */}
      <div className="bg-gray-300 rounded-md p-4">
        <h1 className="text-2xl font-bold text-gray-800">Payment</h1>
        <p className="text-gray-700 mt-1">
          View your saved payment methods or make a payment.
        </p>
      </div>

      {/* Payment Info */}
      <div className="bg-white rounded-md p-4 shadow-md flex flex-col gap-3">
        <p className="text-gray-800 font-medium">
          Payment method 1: Visa ****1234
        </p>
        <p className="text-gray-800 font-medium">
          Payment method 2: MasterCard ****5678
        </p>
        <p className="text-gray-800 font-medium">
          Payment method 3: Bank Transfer
        </p>
        <p className="text-gray-800 font-medium">Payment method 4: Remita</p>
        <p className="text-gray-800 font-medium">Payment method 5: PayStack</p>
      </div>

      {/* Placeholder / Action */}
      <div className="bg-white rounded-md p-4 shadow-md flex flex-col gap-3">
        <p className="text-gray-700">
          You can add new payment methods here later.
        </p>
        <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md transition">
          Add Payment Method
        </button>
      </div>
    </div>
  );
};

export default Payment;
