import { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

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
              <label className="block text-lg text-gray-700" htmlFor="subject">
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
              <label className="block text-lg text-gray-700" htmlFor="message">
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
    </div>
  );
};

export default Contact;
