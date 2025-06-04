import { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailContent = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_n6hzr1o",
        "template_0xr8hi8",
        emailContent,
        "YThWb8XnZh2iYVXjp"
      )
      .then(
        () => {
          alert(t("contact.successMessage"));
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error);
          alert(t("contact.errorMessage"));
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
      <div className="bg-gray-50 py-12 px-4 md:px-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-900">
            {t("contact.title")}
          </h1>
          <p className="text-lg text-gray-700 mt-4">{t("contact.subTitle")}</p>
        </div>

        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t("contact.addressTitle")}
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong>36 Bracken Ave</strong>
              <br />
              Frazer, PA 19355
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>{t("appointment.phoneLabel")}</strong>{" "}
              <a
                href="tel:+16106477757"
                className="text-blue-500 hover:underline"
              >
                (610) 647-7757
              </a>
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>{t("contact.shopHoursWD")}</strong>
              <br />
              <strong>{t("contact.shopHoursWE")}</strong>
            </p>

            <div className="mt-8">
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
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t("contact.formTitle")}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-lg text-gray-700" htmlFor="name">
                  {t("contact.nameLabel")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md text-gray-700"
                />
              </div>
              <div>
                <label className="block text-lg text-gray-700" htmlFor="email">
                  {t("contact.emailLabel")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md text-gray-700"
                />
              </div>
              <div>
                <label className="block text-lg text-gray-700" htmlFor="phone">
                  {t("contact.phoneLabel")}
                </label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md text-gray-700"
                />
              </div>
              <div>
                <label
                  className="block text-lg text-gray-700"
                  htmlFor="subject"
                >
                  {t("contact.subjectLabel")}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md text-gray-700"
                />
              </div>
              <div>
                <label
                  className="block text-lg text-gray-700"
                  htmlFor="message"
                >
                  {t("contact.messageLabel")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md text-gray-700"
                  rows="5"
                ></textarea>
              </div>

              <div
                className="g-recaptcha"
                data-sitekey="your-site-key-here"
              ></div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 cursor-pointer"
              >
                {t("contact.submitButton")}
              </button>
            </form>
          </div>
        </div>
        {/* <div className="w-full h-fit lg:pb-[100px] relative">
          <div className="h-full lg:h-[calc(100vh-162px)] flex flex-col gap-10 lg:flex-row">
            <div className="lg:w-[40%] lg:gap-0 flex flex-col h-full">
              <div className="w-full h-[45%]">
                <div className="flex flex-col items-start justify-center gap-2 h-full">
                  <h1 className="text-[34px] xl:text-[52px] lg:whitespace-nowrap w-[75%] font-gilroymid text-black">
                    {ContactPageData?.title}
                  </h1>
                  <h2 className="text-[16px] xl:text-[20px] w-[75%] font-gilroyreg text-black">
                    {ContactPageData?.description}
                  </h2>
                </div>
              </div>{" "}
              <div className="border-b border-black border-opacity-[0.16] my-6 lg:p-0"></div>
              <div className="w-full h-[35%]">
                <div className="flex flex-col items-start justify-center gap-6 h-full">
                  {ContactPageData?.contactInfo?.map((item, index) => (
                    <div
                      key={index}
                      className="flex lg:gap-2 xl:gap-12 w-full text-black"
                    >
                      <div className="w-[100px] lg:text-[16px] xl:text-[18px] font-gilroyreg">
                        {item?.title}
                      </div>
                      <div className="">:</div>
                      <div className="w-[60%] lg:text-[16px] xl:text-[18px] font-gilroyreg">
                        {item?.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-b border-black border-opacity-[0.16] my-6 lg:p-0"></div>
            </div>
            <div className="lg:hidden flex lg:w-[55%] relative w-full h-full lg:h-[calc(100vh-108px)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.5261392946522!2d28.807188656269524!3d41.05200980734718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa566d2256cc9%3A0xd079277482592417!2sHuzur%20Plastik!5e1!3m2!1str!2str!4v1746796167168!5m2!1str!2str"
                width="100%"
                height="800px"
                style={{ border: 0, filter: "grayscale(80%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div
                className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 bg-white/95 backdrop-blur-[1px]"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle at center, transparent 1px, black 500px)",
                  maskImage:
                    "radial-gradient(circle at center, transparent 1px, black 450px)",
                }}
              ></div>
            </div>
          </div>
          <div className="hidden lg:flex lg:w-[55%] w-full h-1/2 lg:h-[calc(100vh-108px)] p-2 absolute bottom-0 lg:top-[108px] lg:right-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.5261392946522!2d28.807188656269524!3d41.05200980734718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa566d2256cc9%3A0xd079277482592417!2sHuzur%20Plastik!5e1!3m2!1str!2str!4v1746796167168!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(80%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div
              className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 bg-white/95 backdrop-blur-[1px]"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle at center, transparent 1px, black 500px)",
                maskImage:
                  "radial-gradient(circle at center, transparent 1px, black 450px)",
              }}
            ></div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Contact;
