import { useState } from "react";
import { Link } from "react-router-dom";
import checkIcon from '../assets/check-icon/check-icon.png';
import { servicesData } from "../constants/servicesData";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (index) => {
    if (activeCategory === index) {
      setActiveCategory(null);
    } else {
      setActiveCategory(index);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-900">Our Services</h1>
        <p className="text-lg text-gray-700 mt-4">
          Here at Pelle’s Automotive, we pride ourselves in providing excellent
          service in the following areas.
        </p>
      </div>

      {/* Services List */}
      <div className="max-w-screen-xl mx-auto">
        {servicesData.map((category, index) => (
          <div key={index} className="mb-12">
            <div
              className="text-xl font-semibold text-gray-900 cursor-pointer flex items-center justify-between"
              onClick={() => toggleCategory(index)}
            >
              <span>{category.category}</span>
              <span className="text-xl">
                {activeCategory === index ? "▲" : "▼"}
              </span>
            </div>
            {activeCategory === index && (
              <div className="mt-4 space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="flex items-center space-x-3"
                  >
                    <img
                      src={checkIcon}
                      alt="Check"
                      className="w-5 h-5"
                    />
                    <p className="text-sm text-gray-700">{service}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-700 mb-6">
          Need an appointment or more information? We are here to help!
        </p>

        <Link to="/appointments" onClick={() => scrollToTop()}>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition duration-300 cursor-pointer">
            Schedule an Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
