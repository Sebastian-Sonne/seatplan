
const features = [
  {
    title: 'Quick Setup',
    description: 'Generate seat plans in minutes without any hassle.',
    icon: '/images/icons/fast.svg',
  },
  {
    title: 'Customizable Layouts',
    description: 'Adapt seat arrangements to fit your classroom layout.',
    icon: '/images/icons/customize.svg',
  },
  {
    title: 'Student Management',
    description: 'Easily assign students and manage seating preferences.',
    icon: '/images/icons/management.svg',
  },
  {
    title: 'Printable Plans',
    description: 'Download and print seat plans for easy reference.',
    icon: '/images/icons/print.svg',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="flex flex-wrap -mx-4">
          {features.map((feature, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                <img src={feature.icon} alt="" className="h-12 w-12 mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
