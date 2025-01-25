import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside
  const handleClickOutside = (event) => {
    if (!event.target.closest(".mobile-menu")) {
      setIsMenuOpen(false);
    }
  };

  // Add event listener to close menu when clicking outside
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

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

        {/* Navigation Links (Desktop) */}
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

      {/* Mobile Menu with Full-Screen Backdrop */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40`}
      >
        {/* Menu Content */}
        <div
          className="mobile-menu w-full h-full flex justify-center items-center"
          onClick={(e) => e.stopPropagation()} // Prevent closing menu if clicking inside
        >
          <ul className="space-y-6 text-center text-white">
            <li>
              <Link to="/" className="hover:underline block text-2xl">
                Home
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="hover:underline block text-2xl">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline block text-2xl">
                Services
              </Link>
            </li>
            <li>
              <Link to="/coupons" className="hover:underline block text-2xl">
                Coupons
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline block text-2xl">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
