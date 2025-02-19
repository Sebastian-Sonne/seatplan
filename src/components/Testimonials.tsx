// src/components/TestimonialsSection.tsx
import React from 'react';

const testimonials = [
  {
    name: 'Emily Johnson',
    role: 'High School Teacher',
    feedback: 'The seatplan generator has streamlined my classroom management. It’s incredibly intuitive and saves me so much time!',
    image: '/images/testimonials/emily.jpg',
  },
  {
    name: 'Michael Williams',
    role: 'Middle School Educator',
    feedback: 'A fantastic tool for teachers! Customizing seat plans has never been easier.',
    image: '/images/testimonials/michael.jpg',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Educators Are Saying</h2>
        <div className="flex flex-wrap -mx-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="h-16 w-16 rounded-full mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
