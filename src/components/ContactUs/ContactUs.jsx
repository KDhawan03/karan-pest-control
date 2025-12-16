import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-r from-[#1e1a3d] to-[#299B46] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo & Address */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">
              Karan
              <span className="block text-sm tracking-widest font-light">
                PEST CONTROL
              </span>
            </h2>

            <p className="text-sm leading-6 mb-4">
              Karan Pest Control Near You
            </p>

            <p className="text-sm">
              <span className="font-semibold">Phone:</span> +91 7355169038
            </p>
            <p className="text-sm mt-1">
              183 Y-1, Shankracharya Nagar <br />
              Kanpur, Uttar Pradesh
            </p>
          </div>

          {/* Pest Control */}
          <div>
            <h3 className="font-semibold mb-4">Pest Control</h3>
            <ul className="space-y-2 text-sm">
              <li>Ant Control</li>
              <li>Termite Protection</li>
              <li>Bed Bug Treatment</li>
              <li>Cockroach Control</li>
              <li>Rat & Rodent Management</li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Review</li>
              <li>Our Services</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Map (WIDTH IMPROVED HERE ✅) */}
          <div className="flex justify-start lg:justify-end">
            <div
              className="w-full max-w-sm md:max-w-md lg:max-w-lg 
                         rounded-xl overflow-hidden border border-white/20 shadow-lg"
            >
              <iframe
                title="Karan Pest Control Location"
                src="https://www.google.com/maps?q=Shankracharya%20Nagar%20Kanpur&output=embed"
                className="w-full h-44 md:h-48 lg:h-52"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Follow Us */}
        <div className="mt-12 flex items-center justify-end gap-4">
          <span className="mr-4 text-sm">Follow Us</span>
          <div className="flex gap-3">
            <a className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30">
              <FacebookOutlined />
            </a>
            <a className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30">
              <InstagramOutlined />
            </a>
            <a className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30">
              <TwitterOutlined />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm">
          <p>© 2025 Karan Pest Control. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4 text-xs">
            <span>Careers</span>
            <span>|</span>
            <span>Terms</span>
            <span>|</span>
            <span>Privacy</span>
            <span>|</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
