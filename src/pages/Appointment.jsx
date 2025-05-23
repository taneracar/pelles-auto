import { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const Appointment = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    service: "",
    firstName: "",
    lastName: "",
    vehicle: "",
    contactMethod: "",
    phone: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const userID = "YThWb8XnZh2iYVXjp";
    const templateID = "template_8z4igzq";

    const emailContent = {
      date: formData.date,
      time: formData.time,
      service: formData.service,
      firstName: formData.firstName,
      lastName: formData.lastName,
      vehicle: formData.vehicle,
      contactMethod: formData.contactMethod,
      phone: formData.phone,
      email: formData.email,
    };

    emailjs.send("service_n6hzr1o", templateID, emailContent, userID).then(
      () => {
        alert(t("appointment.successMessage"));
        setFormData({
          date: "",
          time: "",
          service: "",
          firstName: "",
          lastName: "",
          vehicle: "",
          contactMethod: "",
          phone: "",
          email: "",
        });
      },
      (error) => {
        console.error("Error sending email:", error);
        alert(t("appointment.errorMessage"));
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 8; hour < 17; hour++) {
      for (let minutes of [0, 15, 30, 45]) {
        const isPM = hour >= 12;
        const displayHour = hour > 12 ? hour - 12 : hour;
        const formattedMinutes = minutes.toString().padStart(2, "0");
        const period = isPM ? "PM" : "AM";
        times.push(`${displayHour}:${formattedMinutes} ${period}`);
      }
    }
    return times;
  };

  return (
    <>
      <Helmet>
        <title>{t("helmet.appointments.title")}</title>
        <link
          rel="canonical"
          href="https://www.pellesautomotive.net/appointments"
        />
        <meta
          name="description"
          content={t("helmet.appointments.description")}
        />
        <meta property="og:title" content={t("helmet.appointments.ogTitle")} />
        <meta
          property="og:description"
          content={t("helmet.appointments.ogDescription")}
        />
        <meta property="og:image" content="/logo.svg" />
        <meta
          property="og:url"
          content="https://www.pellesautomotive.net/appointments"
        />
      </Helmet>
      <div className="bg-white text-gray-900 min-h-screen flex items-center justify-center">
        <div className="bg-gray-200 text-gray-900 p-8 rounded-lg shadow-lg max-w-3xl w-full lg:max-w-5xl m-2">
          <h1 className="text-2xl font-bold mb-4 text-center">
            {t("appointment.shopHoursTitle")}
          </h1>
          <p className="text-lg mb-6 text-center">
            {" "}
            {t("contact.shopHoursWD")}
            <br />
            {t("contact.shopHoursWE")}
          </p>

          <h2 className="text-xl font-bold mb-4 text-center">
            {t("appointment.scheduleTitle")}
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="date" className="font-medium">
                {t("appointment.dateLabel")}
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="time" className="font-medium">
                {t("appointment.timeLabel")}
              </label>
              <select
                id="time"
                name="time"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">{t("appointment.selectTime")}</option>
                {generateTimeOptions().map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="service" className="font-medium">
                {t("appointment.serviceLabel")}
              </label>
              <input
                type="text"
                id="service"
                name="service"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={t("appointment.servicePlaceholder")}
                value={formData.service}
                onChange={handleChange}
                required
              />
            </div>

            <h3 className="text-xl font-bold text-center">
              {t("appointment.contactInfoTitle")}
            </h3>

            <div className="flex flex-col">
              <label htmlFor="firstName" className="font-medium">
                {t("appointment.firstNameLabel")}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={t("appointment.firstNamePlaceholder")}
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName" className="font-medium">
                {t("appointment.lastNameLabel")}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={t("appointment.lastNamePlaceholder")}
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="vehicle" className="font-medium">
                {t("appointment.vehicleLabel")}
              </label>
              <input
                type="text"
                id="vehicle"
                name="vehicle"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={t("appointment.vehiclePlaceholder")}
                value={formData.vehicle}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="contactMethod" className="font-medium">
                {t("appointment.contactMethodLabel")}
              </label>
              <select
                id="contactMethod"
                name="contactMethod"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.contactMethod}
                onChange={handleChange}
                required
              >
                <option value="">{t("appointment.selectMethod")}</option>
                <option value="any">{t("appointment.contactMethodAny")}</option>
                <option value="phone">
                  {t("appointment.contactMethodPhone")}
                </option>
                <option value="email">
                  {t("appointment.contactMethodEmail")}
                </option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="font-medium">
                {t("appointment.phoneLabel")}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={t("appointment.phonePlaceholder")}
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium">
                {t("appointment.emailLabel")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={t("appointment.emailPlaceholder")}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            >
              {t("appointment.submitButton")}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Appointment;
