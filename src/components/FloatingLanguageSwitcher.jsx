import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FloatingLanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 sm:bottom-4 sm:left-4">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none transform transition-all duration-200 hover:scale-110 w-14 h-14 sm:w-12 sm:h-12 cursor-pointer"
        aria-label="Change Language"
      >
        🌐
      </button>

      {isOpen && (
        <div className="absolute bottom-16 left-0 bg-white border shadow-md rounded-md w-32 p-2 sm:w-28 ">
          <button
            onClick={() => changeLanguage("en")}
            className="flex items-center w-full py-2 text-left text-gray-700 hover:bg-gray-200 hover:cursor-pointer rounded-md space-x-2"
          >
            {/* <Flag code="US" className="w-5 h-5" /> */}
            <span role="img" aria-label="US Flag" className="w-5 h-5">
              🇺🇸
            </span>
            <span>English</span>
          </button>
          <button
            onClick={() => changeLanguage("es")}
            className="flex items-center w-full py-2 text-left text-gray-700 hover:bg-gray-200 hover:cursor-pointer rounded-md space-x-2"
          >
            {/* <Flag code="ES" className="w-5 h-5" /> */}
            <span role="img" aria-label="Spain Flag" className="w-5 h-5">
              🇪🇸
            </span>
            <span>Español</span>
          </button>
        </div>
      )}
    </div>
  );
}
