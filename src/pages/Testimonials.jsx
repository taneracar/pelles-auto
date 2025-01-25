const testimonials = [
  {
    name: "Jody M.",
    location: "Downingtown, PA",
    vehicle: "Toyota Tacoma",
    rating: 5,
    review:
      "The only mechanic I will go to or send anyone!! Not too many mechanics are honest. This is the only place that I will recommend to anyone.",
    date: "01/24/2025",
  },
  {
    name: "Verified Customer",
    location: "Malvern, PA",
    vehicle: "Subaru Legacy",
    rating: 5,
    review: "Always accommodating. Waited while oil change done.",
    date: "01/15/2025",
  },
  {
    name: "Rick S.",
    location: "Exton, PA",
    vehicle: "Ford F-150",
    rating: 5,
    review:
      "Charlie Pelle and his crew always do an incredible job with repairs or simple advice. They don’t upsell you in something you don’t need. Great, honest work!",
    date: "12/22/2024",
  },
  {
    name: "Tony M.",
    location: "Dodge Pickup",
    rating: 5,
    review:
      "What a great shop! My Dodge Ram passenger axle had gone bad. They fit me into their schedule, allowed me to supply the parts, and repaired it at half the cost of the dealership.",
    date: "12/18/2024",
  },
  // Add more reviews as necessary
];

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
          <div className="text-5xl font-bold text-yellow-500 mr-4">5.0/5</div>
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
            <a href="/testimonials" className="text-blue-500 hover:underline">
              SureCritic Pelle's Automotive Testimonial page.
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
