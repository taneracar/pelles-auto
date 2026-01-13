import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".mobile-menu") &&
      !event.target.closest(".md:hidden")
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="mx-auto flex justify-between items-center px-6 max-sm:pl-0 max-sm:pr-4">
        <Link to="/" onClick={scrollToTop} className=" max-md:-ml-5">
          <img
            src="/logo.svg"
            alt="Pelle's Auto Logo"
            className="transition-transform transform hover:scale-110"
          />
        </Link>

        <button
          className="md:hidden flex items-center px-2"
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

        <ul className="hidden md:flex max-md:space-x-4 lg:space-x-8 lg:mr-10">
          {[
            { name: t("navbar.home"), path: "/" },
            { name: t("navbar.services"), path: "/services" },
            { name: t("navbar.appointments"), path: "/appointments" },
            { name: t("navbar.contact"), path: "/contact_us" },
            // { name: t("navbar.testimonials"), path: "/testimonials" },
            //{ name: t("navbar.coupons"), path: "/coupons" },
          ].map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`relative px-3 py-2 flex items-center justify-center font-medium ${
                  isActive(link.path)
                    ? "text-teal-400 underline"
                    : "text-white hover:text-teal-300"
                }`}
                onClick={scrollToTop}
              >
                {link.name}
                {!isActive(link.path) && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-teal-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 backdrop-blur-sm z-40`}
      >
        <div
          className="mobile-menu w-full h-full flex flex-col justify-center items-center relative space-y-6"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-6 text-white text-3xl transition-transform transform hover:scale-110"
            onClick={closeMenu}
          >
            &times;
          </button>

          {[
            { name: t("navbar.home"), path: "/" },
            { name: t("navbar.services"), path: "/services" },
            { name: t("navbar.appointments"), path: "/appointments" },
            { name: t("navbar.contact"), path: "/contact_us" },
            //{ name: t("navbar.testimonials"), path: "/testimonials" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block text-2xl font-medium ${
                isActive(link.path)
                  ? "text-teal-400 underline"
                  : "text-white hover:text-teal-300"
              }`}
              onClick={() => {
                closeMenu();
                scrollToTop();
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
