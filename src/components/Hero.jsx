import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroImages } from "../assets/Hero/heroImages.js"; // Import images
import prevIcon from "../assets/Hero/icons/leftArrow.png"; // Import previous button icon
import nextIcon from "../assets/Hero/icons/rightArrow.png"; // Import next button icon
import { useSwipeable } from "react-swipeable"; // Import react-swipeable
import { Link } from "react-router-dom";
const Hero = () => {
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

  // Swipe functionality
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section
      {...swipeHandlers}
      className="relative w-full h-screen bg-gray-900 text-white overflow-hidden"
    >
      {/* Background Image Slider */}
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

      {/* Darker Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-20"></div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
          Welcome to Pelle's Automotive
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300">
          Professional car repair services you can trust.
        </p>
        <Link to="/appointments" onClick={scrollToTop()}>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            Book an Appointment
          </button>
        </Link>
      </div>

      {/* Navigation Buttons (visible only on larger screens) */}
      <button
        onClick={handlePrev}
        className="absolute left-5 sm:left-8 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 sm:p-4 rounded-full z-30 hidden sm:block"
      >
        <img src={prevIcon} alt="Previous" className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-5 sm:right-8 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 sm:p-4 rounded-full z-30 hidden sm:block"
      >
        <img src={nextIcon} alt="Next" className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
