import { items } from "../constants/aboutUs";

const AboutUs = () => {
  return (
    <section className="w-full bg-gray-100 py-12 px-4 md:px-16">
      {/* About Us Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          We are working hard to be your number one choice in automotive repair
          and maintenance. Our team is dedicated to providing you and your
          vehicle with professional service and exceptional customer care.
          <br />
          <br />
          Please schedule an appointment with our friendly staff by clicking the
          Appointment tab above or by calling{" "}
          <span className="text-blue-500 font-semibold">(610) 647-7757</span>.
        </p>
      </div>

      {/* Additional Items Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
