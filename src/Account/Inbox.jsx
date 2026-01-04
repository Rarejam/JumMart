const Inbox = () => {
  // Example messages (replace with backend fetch later)
  const messages = [
    {
      id: 1,
      from: "Support",
      subject: "Order Update",
      body: "Your order #1234 has been shipped.",
    },
    {
      id: 2,
      from: "Admin",
      subject: "Welcome!",
      body: "Thanks for joining our marketplace!",
    },
    {
      id: 3,
      from: "Seller",
      subject: "Product Inquiry",
      body: "We have a new offer on Sneakers.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col gap-6">
      {/* Header */}
      <div className="bg-gray-300 rounded-md p-4">
        <h1 className="text-2xl font-bold text-gray-800">Inbox</h1>
        <p className="text-gray-700 mt-1">
          Check your messages from support, sellers, and system notifications.
        </p>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="bg-white rounded-md p-4 shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-gray-800 font-semibold">{msg.subject}</h2>
              <span className="text-gray-500 text-sm">{msg.from}</span>
            </div>
            <p className="text-gray-700 mt-1 text-sm">{msg.body}</p>
          </div>
        ))}
      </div>

      {/* Placeholder for new messages */}
      <div className="bg-white rounded-md p-4 shadow-md flex flex-col gap-3">
        <p className="text-gray-700">You have {messages.length} messages.</p>
      </div>
    </div>
  );
};

export default Inbox;
