import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-base-300 shadow-lg fixed top-0 w-full z-50">
      <nav className="flex justify-between items-center p-5 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="logo">
          <h1 className="text-3xl font-bold">ABISHEK A</h1>
        </div>

        {/* Hamburger - visible only on mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:block absolute md:static top-[70px] left-0 w-full md:w-auto bg-base-300 md:bg-transparent transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row gap-3 justify-center items-center p-4 md:p-0">
            <a href="#" onClick={() => setIsOpen(false)}>
              <li className="hover:bg-base-200 p-2 rounded-md font-bold cursor-pointer">
                HOME
              </li>
            </a>
            <a href="#about" onClick={() => setIsOpen(false)}>
              <li className="hover:bg-base-200 p-2 rounded-md font-bold cursor-pointer">
                ABOUT
              </li>
            </a>
            <a href="#skills" onClick={() => setIsOpen(false)}>
              <li className="hover:bg-base-200 p-2 rounded-md font-bold cursor-pointer">
                SKILLS
              </li>
            </a>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              <li className="hover:bg-base-200 p-2 rounded-md font-bold cursor-pointer">
                PROJECTS
              </li>
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <li className="hover:bg-base-200 p-2 rounded-md font-bold cursor-pointer">
                CONTACT
              </li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

