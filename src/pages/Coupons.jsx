import { useState } from "react";
import { useTranslation } from "react-i18next";

const Coupons = () => {
  const { t } = useTranslation();
  const [isPrintView, setIsPrintView] = useState(false);

  // Toggle between standard view and print view
  const togglePrintView = () => {
    setIsPrintView(!isPrintView);
  };

  return (
    <div className="bg-gray-50 py-12 px-4 md:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-900">
          {t("coupons.title")}
        </h1>
        <p className="text-lg text-gray-700 mt-4">{t("coupons.subTitle")}</p>
      </div>

      {/* Coupon Section */}
      <div className="max-w-screen-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Coupon Details */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            {t("coupons.couponTitle")}
          </h2>
          <p className="text-xl text-gray-800 mb-4">
            <span className="line-through text-red-500 mr-2">
              {" "}
              {t("coupons.oldPrice")}
            </span>
            <span className="text-4xl font-semibold text-green-600">
              {t("coupons.newPrice")}
            </span>
          </p>
          <p className="text-lg text-gray-700 mb-6">
            {t("coupons.couponDetails")}
          </p>

          {/* Print View Toggle */}
          {!isPrintView ? (
            <button
              onClick={togglePrintView}
              className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
            >
              {t("coupons.printButton")}
            </button>
          ) : (
            <div className="mt-4">
              <p className="text-lg text-gray-800">{t("coupons.printView")}</p>
              <p className="text-lg text-gray-600">
                {t("coupons.printMessage")}
              </p>
              <button
                onClick={() => window.print()}
                className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition duration-300 mt-2"
              >
                {t("coupons.printCoupon")}
              </button>
              <button
                onClick={togglePrintView}
                className="bg-gray-600 text-white py-3 px-6 rounded-md hover:bg-gray-700 transition duration-300 mt-2 ml-2"
              >
                {t("coupons.closePrintView")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coupons;
