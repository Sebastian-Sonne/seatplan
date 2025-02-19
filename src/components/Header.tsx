
const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/logo.svg" alt="Seatplan Generator Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-2xl font-semibold text-gray-800">Seatplan Generator</h1>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-600 hover:text-gray-800">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-800">How It Works</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-800">Testimonials</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
        </nav>
        {/* Call to Action */}
        <a
          href="#"
          className="hidden md:block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Try It Now
        </a>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
