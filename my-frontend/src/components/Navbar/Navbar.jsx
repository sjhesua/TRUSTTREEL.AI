import React, { useState } from "react";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  return (
    <nav className="font-reader ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <a href="#" className="text-xl font-bold text-primary-50">
            TRUSTTREEL.AI
          </a>
        </div>
        <div className="hidden md:flex space-x-4 items-baseline">
          <div className="relative group">
            <button
              onClick={toggleDropdown2}
              className="text-primary-50 hover:text-blue-500 nav-link"
            >
              Product
            </button>
            <div
              className={`${isDropdownOpen2 ? "md:block" : "hidden"
                } absolute bg-white shadow-lg rounded mt-2 navbar_dropdown-list `}
            >
              <a
                href="#"
                className="block px-4 py-2 text-primary-900 hover:bg-blue-500 hover:text-white"
              >
                Video Generation
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-primary-900 hover:bg-blue-500 hover:text-white"
              >
                Conversational Video Interface
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-primary-900 hover:bg-blue-500 hover:text-white"
              >
                AI Models
              </a>
            </div>
          </div>
          <a href="#" className="text-primary-50 hover:text-blue-500 nav-link">
            Pricing
          </a>
          <a href="#" className="text-primary-50 hover:text-blue-500 nav-link">
            Docs
          </a>
          <div className="relative group">
            <button
              onClick={toggleDropdown1}
              className="text-primary-50 hover:text-blue-500 nav-link"
            >
              Resources
            </button>
            <div
              className={`${isDropdownOpen1 ? "md:block" : "hidden"
                }  absolute bg-white shadow-lg rounded mt-2 navbar_dropdown-list`}
            >
              <a
                href="#"
                className="block px-4 py-2 text-primary-900 hover:bg-blue-500 hover:text-white"
              >
                Blog
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-primary-900 hover:bg-blue-500 hover:text-white"
              >
                Changelog
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-primary-900 hover:bg-blue-500 hover:text-white"
              >
                Support
              </a>
            </div>
          </div>
          <a href="#" className="text-primary-50 hover:text-blue-500 nav-link">
            Careers
          </a>
        </div>
        <div className="hidden md:flex space-x-4 items-baseline">
          <a href="/login" className="text-primary-50 hover:text-blue-500 nav-link">
            Iniciar sesión
          </a>
          <a href="#" className="rounded-md bg-indigo-600 text-primary-50 hover:text-blue-500 nav-link btnx">
            Get Started For Free
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-primary-50 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a
            href="#"
            className="block px-4 py-2 text-primary-50 hover:bg-blue-500 hover:text-white"
          >
            Opción 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-primary-50 hover:bg-blue-500 hover:text-white"
          >
            Opción 2
          </a>
          <button
            onClick={toggleDropdown1}
            className="block w-full px-4 py-2 text-primary-50 hover:bg-blue-500 hover:text-white"
          >
            Opción 3
          </button>
          {isDropdownOpen1 && (
            <div className="pl-4">
              <a
                href="#"
                className="block px-4 py-2 text-primary-50 hover:bg-blue-500 hover:text-white"
              >
                Sub-opción 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-primary-50 hover:bg-blue-500 hover:text-white"
              >
                Sub-opción 2
              </a>
            </div>
          )}
          <button
            onClick={toggleDropdown2}
            className="block w-full px-4 py-2 text-primary-50 hover:bg-blue-500 hover:text-white"
          >
            Opción 4
          </button>
          {isDropdownOpen2 && (
            <div className="pl-4">
              <a
                href="#"
                className="block px-4 py-2 text-primary-50 hover:bg-blue-500 hover:text-white"
              >
                Sub-opción 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-primary-50 hover:bg-blue-500 hover:text-white"
              >
                Sub-opción 2
              </a>
            </div>
          )}
          <a
            href="#"
            className="block px-4 py-2 text-primary-50 hover:bg-blue-500 hover:text-white"
          >
            Opción 5
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-primary-50 hover:bg-blue-500 hover:text-white"
          >
            Iniciar sesión
          </a>
          <a
            href="#"
            className=" rounded-md bg-indigo-600 block px-4 py-2 text-primary-50 hover:bg-blue-500 hover:text-white"
          >
            Registrarse
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
