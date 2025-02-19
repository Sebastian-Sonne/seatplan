// src/components/CallToActionSection.tsx
import React from 'react';

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Start Simplifying Your Classroom Today</h2>
        <p className="text-xl mb-8">
          Join thousands of educators who are saving time with our seatplan generator.
        </p>
        <a
          href="#"
          className="bg-white text-blue-700 py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-100"
        >
          Try It Free
        </a>
      </div>
    </section>
  );
};

export default CallToActionSection;
