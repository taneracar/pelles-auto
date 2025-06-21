import { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const userID = "YThWb8XnZh2iYVXjp";
    const templateID = "template_8z4igzq";
    const emailContent = { ...formData };

    emailjs.send("service_n6hzr1o", templateID, emailContent, userID).then(
      () => {
        toast.success(t("appointment.successMessage"));
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
        setIsSubmitting(false);
      },
      (error) => {
        console.error("Error sending email:", error);
        toast.error(t("appointment.errorMessage"));
        setIsSubmitting(false);
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

      <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-16 px-4 flex items-center justify-center">
        <div className="w-full max-w-5xl bg-white shadow-2xl rounded-3xl p-10 md:p-16">
          <h1 className="text-center text-4xl font-bold text-gray-900 mb-4">
            {t("appointment.scheduleTitle")}
          </h1>
          <p className="text-center text-lg text-gray-600 mb-10">
            {t("appointment.shopHoursTitle")}
            <br />
            {t("contact.shopHoursWD")}
            <br />
            {t("contact.shopHoursWE")}
          </p>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            <div className="space-y-6">
              <div className="relative flex flex-col">
                <label
                  htmlFor="date"
                  className="block font-medium text-gray-700"
                >
                  {t("appointment.dateLabel")}
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-gray-900 focus:ring-2 focus:ring-blue-500 "
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
                <div className="pointer-events-none absolute top-10 z-10  right-4 text-gray-400 select-none ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="16"
                      y1="2"
                      x2="16"
                      y2="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="8"
                      y1="2"
                      x2="8"
                      y2="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="3"
                      y1="10"
                      x2="21"
                      y2="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="time"
                  className="block font-medium text-gray-700"
                >
                  {t("appointment.timeLabel")}
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-xl border border-gray-300 p-3 pr-10 text-gray-900 focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  <option value="">{t("appointment.selectTime")}</option>
                  {generateTimeOptions().map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                <div className="absolute top-11 right-3 pointer-events-none text-gray-400 select-none text-xl">
                  ▼
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block font-medium text-gray-700"
                >
                  {t("appointment.serviceLabel")}
                </label>
                <input
                  type="text"
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  placeholder={t("appointment.servicePlaceholder")}
                  className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-gray-900 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block font-medium text-gray-700"
                  >
                    {t("appointment.firstNameLabel")}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder={t("appointment.firstNamePlaceholder")}
                    className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-gray-900 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block font-medium text-gray-700"
                  >
                    {t("appointment.lastNameLabel")}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder={t("appointment.lastNamePlaceholder")}
                    className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-gray-900 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="vehicle"
                  className="block font-medium text-gray-700"
                >
                  {t("appointment.vehicleLabel")}
                </label>
                <input
                  type="text"
                  id="vehicle"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  required
                  placeholder={t("appointment.vehiclePlaceholder")}
                  className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-gray-900 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="contactMethod"
                  className="block font-medium text-gray-700"
                >
                  {t("appointment.contactMethodLabel")}
                </label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-xl border border-gray-300 p-3 pr-10 text-gray-900 focus:ring-2 focus:ring-blue-500 appearance-none "
                >
                  <option value="">{t("appointment.selectMethod")}</option>
                  <option value="any">
                    {t("appointment.contactMethodAny")}
                  </option>
                  <option value="phone">
                    {t("appointment.contactMethodPhone")}
                  </option>
                  <option value="email">
                    {t("appointment.contactMethodEmail")}
                  </option>
                </select>
                <div className="absolute top-11 right-3 pointer-events-none text-gray-400 select-none text-xl">
                  ▼
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 relative">
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-medium text-gray-700"
                  >
                    {t("appointment.phoneLabel")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder={t("appointment.phonePlaceholder")}
                    className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-gray-900 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-medium text-gray-700"
                  >
                    {t("appointment.emailLabel")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t("appointment.emailPlaceholder")}
                    className="mt-1 w-full rounded-xl border border-gray-300 p-3 text-gray-900 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 cursor-pointer ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isSubmitting
                  ? t("appointment.submitting")
                  : t("appointment.submitButton")}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Appointment;
