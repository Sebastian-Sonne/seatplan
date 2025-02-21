import PrimaryButton from "./buttons/PrimaryButton";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/favicon.svg" alt="Seatplan Generator Logo" className="h-8 w-8 mr-6" />
          <h1 className="text-2xl font-semibold text-gray-800">Seatplan Generator</h1>
        </div>
        {/* Navigation */}
        <div className="flex flex-row items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-600 hover:text-gray-800">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-800">How It Works</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
          </nav>
          {/* Call to Action */}
          <PrimaryButton className="" onClick={() => null}>
            Get Started
          </PrimaryButton>

        </div>
      </div>
    </header>
  );
};

export default Header;
