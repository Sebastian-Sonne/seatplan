
const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/classroom-background.jpg)' }}
    >
      <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            Create Seatplans - Fast, Free, Forever
          </h1>
          <p className="text-xl mb-8">
            Save time and stay organized with our fast, easy, and free seatplan generator designed for educators.
          </p>
          <a
            href="#"
            className="bg-white text-blue-600 py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-100"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
