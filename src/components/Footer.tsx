// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <img src="/images/logo-footer.svg" alt="Seatplan Generator Logo" className="h-8 mb-4" />
            <p className="max-w-xs">
              Empowering educators with easy-to-use tools for classroom management.
            </p>
          </div>
          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#how-it-works" className="hover:underline">How It Works</a></li>
              <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>Email: <a href="mailto:support@seatplangenerator.com" className="hover:underline">support@seatplangenerator.com</a></p>
            <p className="mt-2">Follow us:</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Icon */}
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Icon */}
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Icon */}
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Seatplan Generator. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="hover:underline text-gray-400">Privacy Policy</a> | 
            <a href="#" className="hover:underline text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
