const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-md p-6 space-y-4">
        <h1 className="text-2xl sm:text-3xl font-semibold text-white">
          About Us
        </h1>

        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          This platform is built to provide a simple, fast, and secure shopping
          experience. We focus on clean design, easy navigation, and reliable
          product delivery.
        </p>

        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          Our goal is to make online shopping stress-free while keeping things
          modern and user-friendly.
        </p>

        <div className="pt-4 border-t border-gray-700">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} JumMart. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
