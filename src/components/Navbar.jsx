import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            src="/logo.svg"
            alt="Pelle's Auto Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Hamburger Menu Icon */}
        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul className={`${isMenuOpen ? "block" : "hidden"} md:flex space-x-4`}>
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/testimonials" className="hover:underline">
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link to="/coupons" className="hover:underline">
              Coupons
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu with Full-Screen and Opacity */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute left-0 top-0 w-full h-full bg-gray-800 bg-opacity-75 p-4`}
      >
        <div className="flex justify-end">
          <button onClick={toggleMenu} className="text-white text-2xl">
            &times; {/* Close button */}
          </button>
        </div>
        <ul className="space-y-4 text-center text-white">
          <li>
            <Link to="/" className="hover:underline block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/testimonials" className="hover:underline block">
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:underline block">
              Services
            </Link>
          </li>
          <li>
            <Link to="/coupons" className="hover:underline block">
              Coupons
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline block">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
