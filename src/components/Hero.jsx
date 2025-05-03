import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroImages } from "../assets/Hero/heroImages.js";
import prevIcon from "../assets/Hero/icons/leftArrow.png";
import nextIcon from "../assets/Hero/icons/rightArrow.png";
import { useSwipeable } from "react-swipeable";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length
    );
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section
      {...swipeHandlers}
      className="relative w-full max-sm:h-[80vh] h-[90vh] bg-gray-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 z-10">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={heroImages[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-20"></div>

      <div className="relative z-30 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
          {t("hero.title")}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300">
          {t("hero.description")}
        </p>
        <Link to="/appointments" onClick={scrollToTop()}>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            {t("hero.cta")}
          </button>
        </Link>
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-5 sm:left-8 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 sm:p-4 rounded-full z-30 hidden sm:block"
      >
        <img
          src={prevIcon}
          alt="Previous"
          className="w-auto h-auto max-w-[32px] max-h-[32px]"
        />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-5 sm:right-8 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 sm:p-4 rounded-full z-30 hidden sm:block"
      >
        <img
          src={nextIcon}
          alt="Next"
          className="w-auto h-auto max-w-[32px] max-h-[32px]"
        />
      </button>

      <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
            aria-label="Slide indicator"
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
