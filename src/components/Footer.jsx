import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-16">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-center md:justify-start space-y-4 sm:space-y-0">
          <div className="flex justify-center">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src="/logo.svg"
                alt="Pelle's Auto Logo"
                className="w-48 transition-transform transform hover:scale-110 hover:opacity-75"
              />
            </Link>
          </div>

          <div className="flex space-x-6 sm:ml-8 justify-center sm:justify-start">
            <Link
              to="https://www.facebook.com/PellesAuto/"
              target="_blank"
              className="transition-transform transform hover:scale-110 hover:opacity-75"
            >
              <img
                src="/facebook-logo.png"
                alt="Facebook"
                className="w-8 h-8"
              />
            </Link>
            <Link
              to="https://www.yelp.com/biz/pelles-automotive-company-malvern"
              target="_blank"
              className="transition-transform transform hover:scale-110 hover:opacity-75"
            >
              <img src="/yelp-logo.png" alt="Yelp" className="w-8 h-8" />
            </Link>
            <Link
              to="https://www.surecritic.com/reviews/pelles-automotive"
              target="_blank"
              className="transition-transform transform hover:scale-110 hover:opacity-75"
            >
              <img
                src="/surecritic-logo.png"
                alt="SureCritic"
                className="w-8 h-8"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center text-center md:text-left md:items-start">
          <h3 className="text-xl font-semibold mb-4 text-gray-300">
            {t("footer.contactUs")}
          </h3>
          <div className="space-y-2">
            <p className="text-sm">
              <strong>{t("footer.addressTitle")}:</strong>
              <br />
              36 Bracken Ave
              <br />
              Frazer, PA 19355
            </p>
            <p className="text-sm">
              <strong>{t("footer.phoneTitle")}:</strong>
              <br />
              <a
                href="tel:+16106477757"
                className="text-blue-500 hover:underline"
              >
                (610) 647-7757
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center md:text-left md:items-start">
          <h3 className="text-xl font-semibold mb-4 text-gray-300">
            {t("footer.shopHours")}
          </h3>
          <div className="space-y-2">
            <p className="text-sm">
              <strong>{t("footer.mondayFriday")}:</strong> 8:00am - 5:00pm
            </p>
            <p className="text-sm">
              <strong>{t("footer.weekend")}:</strong> {t("footer.closed")}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.2397771128895!2d-75.54605268469945!3d39.98840859719525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c65c45df0d7b3d%3A0x9a8be87e43692c94!2s36%20Bracken%20Ave%2C%20Frazer%2C%20PA%2019355!5e0!3m2!1sen!2sus!4v1625569073619!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps Pelle's Automotive"
        ></iframe>
      </div>

      <div className="text-center mt-12 text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
