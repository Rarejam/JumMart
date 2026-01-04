import { Link } from "react-router-dom";
import SignupSection from "./LandingPage/SignupSection";
import LoginSection from "./LandingPage/LoginSection";
import LandingFooter from "./LandingPage/LandingFooter";

const App = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6">
          ACTIVE<span className="text-purple-400">iate</span>
        </h1>

        <p className="max-w-xl text-gray-300 mb-8">
          A modern marketplace to buy, sell, chat, and manage everything in one
          place.
        </p>

        <div className="flex gap-4">
          <a href="#signup" className="px-6 py-3 bg-purple-500 rounded-md">
            Get Started
          </a>
          <Link to="/market" className="px-6 py-3 border rounded-md">
            Visit Market
          </Link>
        </div>
      </section>

      <SignupSection />
      <LoginSection />
      <LandingFooter />
    </div>
  );
};

export default App;
