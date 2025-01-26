import { testimonials } from "../constants/testimonials";

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-4xl font-semibold text-center text-gray-900 mb-12">
          Pelle's Automotive's Reviews
        </h1>

        {/* Overall Rating Section */}
        <div className="flex justify-center items-center mb-8">
          <div className="text-5xl font-bold text-yellow-500 mr-4">5 out of 5</div>
          <div className="text-xl text-gray-700">
            Overall Rating (981 Reviews)
          </div>
        </div>

        {/* Reviews List */}
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
                  {testimonial.location}
                </div>
                <div className="ml-4 text-sm text-gray-600">
                  {testimonial.vehicle}
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="text-yellow-500 text-lg">{`Rating: ${testimonial.rating}/5`}</div>
                <div className="ml-4 text-sm text-gray-600">
                  {testimonial.date}
                </div>
              </div>
              <p className="text-md text-gray-700">{testimonial.review}</p>
            </div>
          ))}
        </div>

        {/* CTA for more reviews */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-700">
            To see more reviews and customer experiences, visit our{" "}
            <a
              href="https://www.surecritic.com/reviews/pelles-automotive?nhd=1"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              SureCritic Pelle's Automotive Testimonial page.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
