import { useState } from "react";
import { Link } from "react-router-dom";
import checkIcon from "../assets/check-icon/check-icon.png";
import { servicesData } from "../constants/servicesData";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const { t } = useTranslation();
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
    <>
      <Helmet>
        <title>{t("helmet.services.title")}</title>
        <link
          rel="canonical"
          href="https://www.pellesautomotive.net/services"
        />
        <meta name="description" content={t("helmet.services.description")} />
        <meta property="og:title" content={t("helmet.services.ogTitle")} />
        <meta
          property="og:description"
          content={t("helmet.services.ogDescription")}
        />
        <meta property="og:image" content="/logo.svg" />
        <meta
          property="og:url"
          content="https://pellesautomotive.net/services"
        />
      </Helmet>
      <div className="bg-gray-50 py-12 px-4 md:px-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-900">
            {t("services.hero_title")}
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            {t("services.hero_text")}
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto">
          {servicesData.map((category, index) => (
            <div key={index} className="mb-12">
              <div
                className="text-xl font-semibold text-gray-900 cursor-pointer flex items-center justify-between"
                onClick={() => toggleCategory(index)}
              >
                <span>{t(`services.${category.category}`)}</span>
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
                      <img src={checkIcon} alt="Check" className="w-5 h-5" />
                      <p className="text-sm text-gray-700">
                        {" "}
                        {t(`services.${service}`)}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">{t("services.cta_text")}</p>

          <Link to="/appointments" onClick={() => scrollToTop()}>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition duration-300 cursor-pointer">
              {t("services.cta_button")}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Services;
