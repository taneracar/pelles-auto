import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-16">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start">
          <Link to="/">
            <img
              src="/logo.svg"
              alt="Pelle's Auto Logo"
              className="w-32 h-auto"
            />
          </Link>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col items-center text-center md:text-left md:items-start">
          <h3 className="text-xl font-semibold mb-4 text-gray-300">
            Contact Us
          </h3>
          <div className="space-y-2">
            <p className="text-sm">
              <strong>Our Address:</strong>
              <br />
              36 Bracken Ave
              <br />
              Frazer, PA 19355
            </p>
            <p className="text-sm">
              <strong>Phone:</strong>
              <br />
              (610) 647-7757
            </p>
          </div>
        </div>

        {/* Shop Hours Section */}
        <div className="flex flex-col items-center text-center md:text-left md:items-start">
          <h3 className="text-xl font-semibold mb-4 text-gray-300">
            Shop Hours
          </h3>
          <div className="space-y-2">
            <p className="text-sm">
              <strong>Monday - Friday:</strong> 8:00am - 5:00pm
            </p>
            <p className="text-sm">
              <strong>Saturday & Sunday:</strong> Closed
            </p>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-12 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.2397771128895!2d-75.54605268469945!3d39.98840859719525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c65c45df0d7b3d%3A0x9a8be87e43692c94!2s36%20Bracken%20Ave%2C%20Frazer%2C%20PA%2019355!5e0!3m2!1sen!2sus!4v1625569073619!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Pelle's Automotive All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
