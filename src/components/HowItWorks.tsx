// src/components/HowItWorksSection.tsx
import React from 'react';

const steps = [
  {
    title: 'Create a Class',
    description: 'Set up your class by entering the class name and number of students.',
    image: '/images/steps/create-class.png',
  },
  {
    title: 'Customize Layout',
    description: 'Choose or customize the seating layout to match your classroom.',
    image: '/images/steps/customize-layout.png',
  },
  {
    title: 'Assign Students',
    description: 'Add student names and assign them to seats automatically or manually.',
    image: '/images/steps/assign-students.png',
  },
  {
    title: 'Download & Share',
    description: 'Download the seat plan or share it digitally with ease.',
    image: '/images/steps/download-share.png',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <img src={step.image} alt={step.title} className="rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2 md:px-12 mt-8 md:mt-0">
                <h3 className="text-3xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
