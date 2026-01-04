import { useState } from "react";

const HelpSupport = () => {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question) return;
    // You can later send this to backend
    setSubmitted(true);
    setQuestion("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col gap-6">
      {/* Header */}
      <div className="bg-gray-300 rounded-md p-4">
        <h1 className="text-2xl font-bold text-gray-800">Help & Support</h1>
        <p className="text-gray-700 mt-1">
          Find answers to your questions or contact support directly.
        </p>
      </div>

      {/* FAQ / Info Section */}
      <div className="bg-white rounded-md p-4 shadow-md flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-gray-800">
          Frequently Asked Questions
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>How do I track my order?</li>
          <li>How do I request a refund?</li>
          <li>How can I update my account info?</li>
        </ul>
      </div>

      {/* Contact / Submit Question */}
      <div className="bg-white rounded-md p-4 shadow-md flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-gray-800">
          Submit a Question
        </h2>
        {submitted && (
          <p className="text-green-600 font-medium">
            Your question has been submitted!
          </p>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <textarea
            className="border border-gray-400 rounded-md p-2 resize-none w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows={4}
            placeholder="Type your question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-300 rounded-md p-4 flex flex-col gap-1">
        <h2 className="text-xl font-semibold text-gray-800">Contact Info</h2>
        <p className="text-gray-700">Email: support@example.com</p>
        <p className="text-gray-700">Phone: +234 800 123 4567</p>
      </div>
    </div>
  );
};

export default HelpSupport;
