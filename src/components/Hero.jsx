import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroImages } from "../assets/hero/heroImages.js"; // Import images
import prevIcon from "../assets/hero/icons/leftArrow.png"; // Import previous button icon
import nextIcon from "../assets/hero/icons/rightArrow.png"; // Import next button icon

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

  return (
    <section className="relative w-full h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={heroImages[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full lg:object-cover md:object-contain " // Ensures image covers and is responsive
          />
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-blue-500">Pelle's Automotive</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Professional car repair services you can trust.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer">
          Book an Appointment
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="cursor-pointer absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full z-20"
      >
        <img
          src={prevIcon}
          alt="Previous"
          className="w-6 h-6 sm:w-4 sm:h-4 lg:w-8 lg:h-8"
        />
      </button>
      <button
        onClick={handleNext}
        className="cursor-pointer absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full z-20"
      >
        <img
          src={nextIcon}
          alt="Next"
          className="w-6 h-6 sm:w-4 sm:h-4 lg:w-8 lg:h-8"
        />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
