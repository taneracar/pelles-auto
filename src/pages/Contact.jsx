import { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailContent = { ...formData };

    emailjs
      .send(
        "service_n6hzr1o",
        "template_0xr8hi8",
        emailContent,
        "YThWb8XnZh2iYVXjp"
      )
      .then(
        () => {
          toast.success(t("contact.successMessage"));
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setIsSubmitting(false);
        },
        (error) => {
          console.error("Error sending email:", error);
          toast.error(t("contact.errorMessage"));
          setIsSubmitting(false);
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>{t("helmet.contact.title")}</title>
        <link rel="canonical" href="https://www.pellesautomotive.net/contact" />
        <meta name="description" content={t("helmet.contact.description")} />
        <meta property="og:title" content={t("helmet.contact.ogTitle")} />
        <meta
          property="og:description"
          content={t("helmet.contact.ogDescription")}
        />
        <meta property="og:image" content="/logo.svg" />
        <meta
          property="og:url"
          content="https://www.pellesautomotive.net/contact"
        />
      </Helmet>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="bg-white py-16 px-4 sm:px-8 lg:px-24">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-gray-900">
              {t("contact.title")}
            </h1>
            <p className="text-lg text-gray-600">{t("contact.subTitle")}</p>

            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold">{t("contact.addressTitle")}</h3>
                <p>
                  36 Bracken Ave
                  <br />
                  Frazer, PA 19355
                </p>
              </div>

              <div>
                <h3 className="font-semibold">{t("appointment.phoneLabel")}</h3>
                <a
                  href="tel:+16106477757"
                  className="text-blue-600 hover:underline"
                >
                  (610) 647-7757
                </a>
              </div>

              <div>
                <h3 className="font-semibold">{t("contact.shopHoursWD")}</h3>
                <p>{t("contact.shopHoursWE")}</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.2397771128895!2d-75.54605268469945!3d39.98840859719525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c65c45df0d7b3d%3A0x9a8be87e43692c94!2s36%20Bracken%20Ave%2C%20Frazer%2C%20PA%2019355!5e0!3m2!1sen!2sus!4v1625569073619!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {t("contact.formTitle")}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t("contact.nameLabel")}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t("contact.emailLabel")}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="input"
                />
              </div>

              <input
                type="text"
                name="phone"
                placeholder={t("contact.phoneLabel")}
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="input"
              />

              <input
                type="text"
                name="subject"
                placeholder={t("contact.subjectLabel")}
                value={formData.subject}
                onChange={handleInputChange}
                className="input"
              />

              <textarea
                name="message"
                placeholder={t("contact.messageLabel")}
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="input resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-xl text-white font-semibold transition duration-300 cursor-pointer ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isSubmitting
                  ? t("contact.submitting") || "Sending..."
                  : t("contact.submitButton")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
