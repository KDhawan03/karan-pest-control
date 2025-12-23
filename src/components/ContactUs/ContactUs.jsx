import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const servicesData = [
  { id: "spider-control", name: "Spider Control" },
  { id: "cockroach-control", name: "Cockroach Control" },
  { id: 4, name: "Termite Protection" },
  { id: 5, name: "Ant Control" },
  { id: 7, name: "Mosquito Fogging" },
  { id: 8, name: "Home Disinfection" },
  { id: 3, name: "Bed Bug Control" },
  { id: 6, name: "Rat & Rodent Management" },
];

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-[#1e1a3d] to-[#299B46] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top - Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

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
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href="tel:+917355169038"
                className="hover:text-[#299B46]"
              >
                +91 7355169038
              </a>
            </p>

            <p className="text-sm mt-1">
              <a
                href="https://www.google.com/maps?q=183+Y-1+Shankracharya+Nagar+Kanpur"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#299B46]"
              >
                183 Y-1, Shankracharya Nagar <br />
                Kanpur, Uttar Pradesh
              </a>
            </p>

            <p className="text-sm mt-2">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=pesticidekaran@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#299B46]"
              >
                pesticidekaran@gmail.com
              </a>
            </p>
          </div>

          {/* Pest Control ->  */}
          <div className="pt-1 md:-ml-4 lg:-ml-8">
            <h3 className="font-semibold mb-5 text-center">
              Pest Control
            </h3>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="cursor-pointer hover:text-[#1e1a3d]"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About - Us */}
          <div className="pt-1">
            <h3 className="font-semibold mb-5 lg:text-center">
              About Us
            </h3>

            <ul className="space-y-2 text-sm ml-15">
              <li>
                <a href="#reviews" className="hover:text-[#1e1a3d]">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#1e1a3d]">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#1e1a3d]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#1e1a3d]">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Map  */}
          <div className="flex justify-start lg:justify-end">
            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-xl overflow-hidden border border-white/20 shadow-lg">
              <iframe
                title="Karan Pest Control Location"
                src="https://www.google.com/maps?q=Shankracharya+Nagar+Kanpur&output=embed"
                className="w-full h-44 md:h-48 lg:h-54"
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Social */}
        <div className="mt-12 flex items-center justify-end gap-4">
          <span className="mr-4 text-sm">Follow Us :</span>
          <div className="flex gap-3">
            <a className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30">
              <FacebookOutlined />
            </a>
            <a className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30">
              <InstagramOutlined />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm">
          <p>© 2025 Karan Pest Control. All rights reserved.</p>
          <div>
            Made with ❤️ by{" "}
            <a
              href="https://www.shikom.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#06ff44]"
            >
              Shikom Solutions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
