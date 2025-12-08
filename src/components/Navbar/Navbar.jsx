import { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-[#1e1a3d]">KaranPestControl</h1>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-[#1e1a3d] hover:text-[#299B46] transition duration-300">
              Home
            </a>
            <a href="#about" className="text-[#1e1a3d] hover:text-[#299B46] transition duration-300">
              About
            </a>
            <a href="#services" className="text-[#1e1a3d] hover:text-[#299B46] transition duration-300">
              Our Services
            </a>
            <a href="#reviews" className="text-[#1e1a3d] hover:text-[#299B46] transition duration-300">
              Reviews
            </a>
            <a href="#contact" className="text-[#1e1a3d] hover:text-[#299B46] transition duration-300">
              Contact Us
            </a>
          </div>

          {/* Get a quote */}
          <div className="hidden md:block">
            <button className="bg-[#299B46] hover:bg-[#1e1a3d] text-white font-semibold px-6 py-2 rounded-full transition duration-400 transform hover:scale-105 btn-wipe">
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#299B46] hover:text-[#1e1a3d] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-700 hover:bg-[#299B46] hover:text-white rounded-md transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:bg-[#299B46] hover:text-white rounded-md transition duration-300"
            >
              About
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-gray-700 hover:bg-[#299B46] hover:text-white rounded-md transition duration-300"
            >
              Our Services
            </a>
            <a
              href="#reviews"
              className="block px-3 py-2 text-gray-700 hover:bg-[#299B46] hover:text-white rounded-md transition duration-300"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:bg-[#299B46] hover:text-white rounded-md transition duration-300"
            >
              Contact Us
            </a>
            <button className="w-full mt-2 bg-[#299B46] hover:bg-[#1e1a3d] text-white font-semibold px-6 py-2 rounded-full transition duration-300">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
