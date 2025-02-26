import React, { useContext, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { ThemeContext } from "../ContextApi/ThemProvider";
import { Link as ScrollLink } from "react-scroll";
const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="h-16 flex scroll-auto fixed mb-20 text-gray-900 bg-white w-full  items-center justify-between px-6 md:px-12 lg:px-28 transition-all duration-300">
        <div>
          <img className="w-20 sm:w-32" src="./logo5.png" alt="Logo" />
        </div>

        <div className="hidden md:flex items-center gap-8 text-lg">
          <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500 transition hover:border-b-2">Home</ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500 transition hover:border-b-2">Services</ScrollLink>
          <ScrollLink to="our-work" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500 transition hover:border-b-2">Our Work</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500 transition hover:border-b-2">Contact</ScrollLink>
        </div>


        <div className="flex items-center gap-6">
          <button onClick={toggleTheme}>
            {theme == 'dark' ? <MdOutlineLightMode size={25} /> : <MdDarkMode size={25} />}
          </button>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <AiOutlineClose size={25} />
            ) : (
              <RxHamburgerMenu size={25} />
            )}
          </button>
        </div>
      </nav>

    
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-md py-4 transition-all duration-300">
          <ScrollLink to="home" smooth={true} duration={500} className="py-2 cursor-pointer hover:text-blue-500 transition  hover:border-b-2" onClick={() => setMenuOpen(false)}>Home</ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} className="py-2 cursor-pointer hover:text-blue-500 transition hover:border-b-2" onClick={() => setMenuOpen(false)}>Services</ScrollLink>
          <ScrollLink to="our-work" smooth={true} duration={500} className="py-2 cursor-pointer hover:text-blue-500 transition hover:border-b-2" onClick={() => setMenuOpen(false)}>Our Work</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="py-2 cursor-pointer hover:text-blue-500 transition hover:border-b-2" onClick={() => setMenuOpen(false)}>Contact</ScrollLink>
        </div>

      )}
    </>
  );
};

export default Navbar;
