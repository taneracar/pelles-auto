import { useTranslation } from "react-i18next";
import { items } from "../constants/aboutUs";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-gray-100 py-12 px-4 md:px-16">
      <div className="text-center mb-12 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          {t("aboutUs.title")}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {t("aboutUs.description")}{" "}
          <strong>
            <a
              href="tel:+16106477757"
              className="text-blue-700 hover:underline"
            >
              {t("aboutUs.numb")}
            </a>
          </strong>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={t(item.titleKey)}
              className="w-16 h-16 mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {t(item.titleKey)}
            </h3>
            <p className="text-gray-600 text-sm">{t(item.descriptionKey)}</p>{" "}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
