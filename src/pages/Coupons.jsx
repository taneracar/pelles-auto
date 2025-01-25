import { useState } from "react";

const Coupons = () => {
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
          Special Coupons
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Save big with our exclusive offers!
        </p>
      </div>

      {/* Coupon Section */}
      <div className="max-w-screen-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Coupon Details */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            State Inspection & Emissions
          </h2>
          <p className="text-xl text-gray-800 mb-4">
            <span className="line-through text-red-500 mr-2">$79.95</span>
            <span className="text-4xl font-semibold text-green-600">
              $49.95!
            </span>
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Most vehicles. Must present coupon at time of service.
            <br />
            Cannot combine offers. Certain restrictions apply.
          </p>

          {/* Print View Toggle */}
          {!isPrintView ? (
            <button
              onClick={togglePrintView}
              className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Click to Open in Print View
            </button>
          ) : (
            <div className="mt-4">
              <p className="text-lg text-gray-800">Printing View:</p>
              <p className="text-lg text-gray-600">
                Now you can print this coupon!
              </p>
              <button
                onClick={() => window.print()}
                className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition duration-300 mt-2"
              >
                Print Coupon
              </button>
              <button
                onClick={togglePrintView}
                className="bg-gray-600 text-white py-3 px-6 rounded-md hover:bg-gray-700 transition duration-300 mt-2 ml-2"
              >
                Close Print View
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coupons;
