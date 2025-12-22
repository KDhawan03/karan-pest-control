import { useState } from 'react';
import './Navbar.css'
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // ← YE ADD KIA
  
  const goToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/");
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 lg:-ml-24">
            {/* Logo */}
            <a href="#home" onClick={(e) => { e.preventDefault(); goToSection("home"); }} >
              <div className="shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Karan Pest Control Logo"
                  className="h-24 w-auto object-contain"
                  style={{
                    filter: 'drop-shadow(0 0 0 white) brightness(1.1) contrast(1.2)',
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>
            </a>
            {/* Navigation links */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" onClick={(e) => { e.preventDefault(); goToSection("home"); }} className="text-[#1e1a3d] hover:text-[#299B46] transition duration-300">
                Home
              </a>
              <a href="#about" onClick={(e) => { e.preventDefault(); goToSection("about"); }}  className="text-[#1e1a3d] hover:text-[#299B46] transition duration-300">
                About Us
              </a>
              <a href="#services" onClick={(e) => { e.preventDefault(); goToSection("services"); }}  className="text-[#1e1a3d] hover:text-[#299B46] transition duration-300">
                Our Services
              </a>
              <a href="#reviews" onClick={(e) => { e.preventDefault(); goToSection("reviews"); }}  className="text-[#1e1a3d] hover:text-[#299B46] transition duration-300">
                Reviews
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); goToSection("contact"); }}  className="text-[#1e1a3d] hover:text-[#299B46] transition duration-300">
                Contact Us
              </a>
            </div>

            {/* Get a quote */}
            <div className="hidden md:block">
              <a href="#quote">
                <button className="bg-[#299B46] hover:bg-[#1e1a3d] text-white font-semibold px-6 py-2 rounded-full transition duration-400 transform hover:scale-105 btn-wipe lg:-mr-24">
                  Get a Quote
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-[#299B46] hover:text-[#1e1a3d] focus:outline-none"
              >
                {isMenuOpen ? (
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiMenu className="h-6 w-6" />
                )}
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
              <a href="#quote">
                <button className="w-full mt-2 bg-[#299B46] hover:bg-[#1e1a3d] text-white font-semibold px-6 py-2 rounded-full transition duration-300">
                  Get a Quote
                </button>
              </a>
            </div>
          </div>
        )}
      </nav>
      <FloatingWhatsApp
        phoneNumber="+917355169038"
        accountName="Karan Pest Control Services"
        allowClickAway
        chatMessage="Hello, how can we help you?"
        avatar="./images/logo.png"
        className="fixed bottom-4 right-4 z-50"
        notification
        notificationSound
      />
    </>
  );
};

export default Navbar;
