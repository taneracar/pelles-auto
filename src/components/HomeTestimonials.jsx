import BeatSVG from "../icons/beat";
import VectorSVG from "../icons/Vector";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    quote:
      "The only mechanic I will go to or send anyone!! Not too many mechanics are honest. This is the only place that I will recommend to anyone.",
    name: "Jody M.",
    title: "Downingtown, PA",
    vehicle: "Toyota Tacoma",
    rating: 5,
    date: "01/24/2025",
  },
  {
    quote:
      "I feel comfortable taking my car to Pelle's for inspection knowing he and his team won't try to perform unnecessary repairs (e.g. cabin filter, air filter, wiper blades, coolant flush) like dealerships and the chain mechanics are trained to do.",
    name: "John N.",
    title: "Malvern, PA",
    vehicle: "Dodge Pickup",
    rating: 5,
    date: "12/09/2024",
  },
  {
    quote:
      "Charlie Pelle and his crew always do an incredible job with repairs or simple advice. They don’t upsell you in something you don’t need. Great, honest work!",
    name: "Rick S.",
    title: "Exton, PA",
    vehicle: "Ford F-150",
    rating: 5,
    date: "12/22/2024",
  },
  {
    quote:
      "What a great shop! My Dodge Ram passenger axle had gone bad. They fit me into their schedule, allowed me to supply the parts, and repaired it at half the cost of the dealership.",
    name: "Tony M.",
    title: "",
    vehicle: "Dodge Pickup",
    rating: 5,
    date: "12/18/2024",
  },
  {
    quote:
      "Outstanding service and repair! Always trust Charlie and mechanics with all my vehicles and service. Very reliable and reasonable prices for great service! Highly recommend them for all your vehicle needs!",
    name: "Barry C.",
    title: "Malvern, PA",
    vehicle: "Ford F-150",
    rating: 5,
    date: "10/29/2024",
  },
];

const HomeTestimonials = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full bg-gray-100 py-12 md:mb-16 px-4 md:px-16">
      <div className="flex flex-col items-start justify-center">
        <div className="flex flex-col lg:flex-row justify-between w-full px-4">
          <div className="flex flex-col items-start justify-center">
            <div className="flex justify-center items-center gap-2">
              <BeatSVG width={50} height={50} />
              <h3 className="text-[#1E5DBC] text-2xl md:text-3xl font-bold ">
                TESTIMONIALS
              </h3>
            </div>
            <div className="mt-2">
              <h2 className="text-[#1e2939] text-3xl md:text-4xl font-bold uppercase">
                What our clients say
              </h2>
            </div>
          </div>
          <div className="flex  md:flex-row justify-start items-center lg:justify-center gap-3 mt-4 lg:mt-0">
            <div className="text-5xl font-bold text-yellow-500 mb-2 md:mb-0 md:mr-4">
              {t("testimonialsPage.overallRating.rating")}
            </div>
            <div className="text-xl text-gray-700">
              {t("testimonialsPage.overallRating.description")}
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <div className="w-full mt-16">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
                1536: { slidesPerView: 4 },
              }}
              modules={[Pagination]}
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white w-full p-8 rounded-lg shadow-md text-left flex flex-col justify-between h-[350px]">
                    <div>
                      <div className="mb-10">
                        <VectorSVG />
                      </div>
                      <p className="text-gray-700 mb-6">{t.quote}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* <img
                          src={t.image || "/default-avatar.jpg"}
                          alt={t.name}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        /> */}
                        <div>
                          <p className="font-semibold text-[#1E5DBC]">
                            {t.name}
                          </p>
                          <p className="text-gray-500 text-sm">{t.title}</p>
                        </div>
                      </div>
                      <div className="text-right text-sm">
                        <p className="text-black font-semibold">{t.vehicle}</p>
                        <p className="text-yellow-500">
                          {"★".repeat(t.rating)}
                        </p>
                        <p className="text-gray-400">{t.date}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="text-center mt-12 w-full">
          <p className="text-xl text-gray-700">
            {t("testimonialsPage.cta.text")}
            <a
              href="https://www.surecritic.com/reviews/pelles-automotive?nhd=1"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              {t("testimonialsPage.cta.linkText")}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
