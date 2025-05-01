import { Helmet } from "react-helmet-async";
import { testimonials } from "../constants/testimonials";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("helmet.testimonials.title")}</title>
        <meta
          name="description"
          content={t("helmet.testimonials.description")}
        />
        <meta property="og:title" content={t("helmet.testimonials.ogTitle")} />
        <meta
          property="og:description"
          content={t("helmet.testimonials.ogDescription")}
        />
        <meta property="og:image" content="/logo.svg" />
        <meta
          property="og:url"
          content="https://pellesautomotive.net/testimonials"
        />
      </Helmet>

      <div className="bg-gray-50 py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <h1 className="text-4xl font-semibold text-center text-gray-900 mb-12">
            {t("testimonialsPage.title")}
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-center mb-8">
            <div className="text-5xl font-bold text-yellow-500 mb-2 md:mb-0 md:mr-4">
              {t("testimonialsPage.overallRating.rating")}
            </div>
            <div className="text-xl text-gray-700">
              {t("testimonialsPage.overallRating.description")}
            </div>
          </div>

          <div>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 mb-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-2xl font-semibold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="ml-4 text-sm text-gray-600">
                    {testimonial.locationKey && (
                      <p>
                        {t(`testimonials.locations.${testimonial.locationKey}`)}
                      </p>
                    )}
                  </div>
                  <div className="ml-4 text-sm text-gray-600">
                    {t(`testimonials.vehicles.${testimonial.vehicleKey}`)}
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="text-yellow-500 text-lg">{`${t(
                    "testimonialsPage.rating"
                  )}: ${testimonial.rating}/5`}</div>
                  <div className="ml-4 text-sm text-gray-600">
                    {testimonial.date}
                  </div>
                </div>
                <p className="text-md text-gray-700">
                  {t(`testimonials.reviews.${testimonial.reviewKey}`)}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-700">
              {t("testimonialsPage.cta.text")}
              <a
                href="https://www.surecritic.com/reviews/pelles-automotive?nhd=1"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                {t("testimonialsPage.cta.linkText")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
