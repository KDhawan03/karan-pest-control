import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Support from "./Support.jsx";

const ContactUs = () => {
  return (
    <footer id="contact" className=" bg-gradient-to-r from-[#1e1a3d] to-[#299B46] text-white">
      
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Logo, Address & Map */}
          <div className="space-y-5 lg:col-span-2">
            <h2 className="text-4xl font-bold leading-tight tracking-wide">
              Karan
              <span className="block text-sm tracking-[0.35em] font-light mt-2 text-white/90">
                PEST CONTROL
              </span>
            </h2>

            <p className="text-base leading-7 text-white/90 max-w-sm">
              Karan Pest Control Near You <br />
              <span className="font-semibold">Phone:</span> +91 7355169038 <br />
              183 Y-1, Shankracharya Nagar <br />
              Kanpur, Uttar Pradesh
            </p>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden border border-white/20 shadow-lg hover:scale-[1.02] transition-transform duration-300 ">
              <iframe
                title="Karan Pest Control Location"
                src="https://www.google.com/maps?q=Shankracharya%20Nagar%20Kanpur&output=embed"
                className="  w-full h-44 md:h-48 lg:h-52"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Pest Control */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-xl mb-5">Pest Control</h3>
            <ul className="space-y-3 text-base text-white/90">
              {[
                "Ant Control",
                "Termite Protection",
                "Bed Bug Treatment",
                "Cockroach Control",
                "Rat & Rodent Management",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-xl mb-5">About Us</h3>
            <ul className="space-y-3 text-base text-white/90">
              {["Review", "Our Services", "FAQ", "Contact Us"].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Support Form */}
          <div className="lg:col-span-2">
            <Support />
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="font-semibold text-lg">Follow Us</h3>

          <div className="flex items-center gap-4">
            <a className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:scale-110 hover:bg-blue-600 transition-all duration-300">
              <FacebookOutlined className="text-lg" />
            </a>
            <a className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:scale-110 hover:bg-pink-500 transition-all duration-300">
              <InstagramOutlined className="text-lg" />
            </a>
            <a className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:scale-110 hover:bg-sky-500 transition-all duration-300">
              <TwitterOutlined className="text-lg" />
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 mt-12 pt-5 text-center text-sm text-white/80">
          © 2025 Karan Pest Control. All rights reserved.
          <div className="mt-2 space-x-3">
            <span className="hover:text-white cursor-pointer">Careers</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer">Sitemap</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default ContactUs;
