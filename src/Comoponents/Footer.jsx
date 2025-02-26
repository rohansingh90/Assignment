import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-semibold">
          <h1>Monak Media</h1>
        </div>

        <div className="flex space-x-6 text-sm mt-4 md:mt-0">
          <ScrollLink to="home" className="hover:text-blue-400 transition">
            Home
          </ScrollLink>
          <ScrollLink to="services" className="hover:text-blue-400 transition">
            Services
          </ScrollLink>
          <ScrollLink to="contact" className="hover:text-blue-400 transition">
            Contact
          </ScrollLink>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-400 transition">
            <IoLogoInstagram size={25} className="text-rose-600" />
          </a>{" "}
    
          <a href="#" className="hover:text-blue-400 transition">
            <FaFacebook size={25} className="text-blue-700" />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <FaTwitter size={25} className="text-blue-700" />
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-4">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
