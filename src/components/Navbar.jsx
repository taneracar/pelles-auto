import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside
  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".mobile-menu") &&
      !event.target.closest(".md:hidden")
    ) {
      setIsMenuOpen(false);
    }
  };

  // Add event listener to close menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      document.body.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close the menu when the close button is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" onClick={scrollToTop}>
          <img
            src="/logo.svg"
            alt="Pelle's Auto Logo"
            style={{ height: "50px", width: "auto" }} // Adjust logo size here
          />
        </Link>

        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
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

        {/* Navigation Links (Desktop) */}
        <ul className={`${isMenuOpen ? "block" : "hidden"} md:flex space-x-4`}>
          <li>
            <Link
              to="/"
              className="hover:underline"
              onClick={() => {
                closeMenu();
                scrollToTop();
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              className="hover:underline"
              onClick={() => {
                closeMenu();
                scrollToTop();
              }}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:underline"
              onClick={() => {
                closeMenu();
                scrollToTop();
              }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/coupons"
              className="hover:underline"
              onClick={() => {
                closeMenu();
                scrollToTop();
              }}
            >
              Coupons
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:underline"
              onClick={() => {
                closeMenu();
                scrollToTop();
              }}
            >
              Contact
            </Link>
          </li>
          {/* New Appointments Link */}
          <li>
            <Link
              to="/appointments"
              className="hover:underline"
              onClick={() => {
                closeMenu();
                scrollToTop();
              }}
            >
              Appointments
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu with Full-Screen Backdrop */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40`}
      >
        {/* Menu Content */}
        <div
          className="mobile-menu w-full h-full flex justify-center items-center relative"
          onClick={(e) => e.stopPropagation()} // Prevent closing menu if clicking inside
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeMenu}
          >
            &times;
          </button>

          {/* Menu Links */}
          <ul className="space-y-6 text-center text-white">
            <li>
              <Link
                to="/"
                className="hover:underline block text-2xl"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="hover:underline block text-2xl"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:underline block text-2xl"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/coupons"
                className="hover:underline block text-2xl"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                Coupons
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline block text-2xl"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                Contact
              </Link>
            </li>
            {/* New Appointments Link */}
            <li>
              <Link
                to="/appointments"
                className="hover:underline block text-2xl"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                Appointments
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
