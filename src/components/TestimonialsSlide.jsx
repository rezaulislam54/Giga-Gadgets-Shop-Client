// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../components/swiper.css";

// import required modules
import { Autoplay } from "swiper/modules";
import { FaQuoteRight } from "react-icons/fa";

const TestimonialsSlide = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="md:flex ">
            <div className="p-4 md:w-1/2 ">
              <div className=" bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-4 rounded">
                <FaQuoteRight className="w-5 h-5 text-gray-400 mb-4" />
                <p className="leading-relaxed text-start  mb-6">
                  I recently purchased the Apple MacBook Air, and I must say,
                  I&apos;m thoroughly impressed with this fantastic piece of
                  technology. From its design to its performance, it has
                  exceeded my expectations in every way.
                </p>
                <div className="flex">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co/TKYdH3g/girl1.jpg"
                    />
                  </div>
                  <div className="pl-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-white">
                      Mr. x
                    </h2>
                    <h2 className="text-gray-500 dark:text-gray-200 text-sm">
                      DESIGNER
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className=" bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-4 rounded">
                <FaQuoteRight className="w-5 h-5 text-gray-400 mb-4" />
                <p className="leading-relaxed text-start  mb-6">
                  I recently purchased the Apple MacBook Air, and I must say,
                  I&apos;m thoroughly impressed with this fantastic piece of
                  technology. From its design to its performance, it has
                  exceeded my expectations in every way.
                </p>
                <div className="flex">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co/TKYdH3g/girl1.jpg"
                    />
                  </div>
                  <div className="pl-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-white">
                      Mr. x
                    </h2>
                    <h2 className="text-gray-500 dark:text-gray-200 text-sm">
                      DESIGNER
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex ">
            <div className="p-4 md:w-1/2 ">
              <div className=" bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-4 rounded">
                <FaQuoteRight className="w-5 h-5 text-gray-400 mb-4" />
                <p className="leading-relaxed text-start  mb-6">
                  I recently purchased the Apple MacBook Air, and I must say,
                  I&apos;m thoroughly impressed with this fantastic piece of
                  technology. From its design to its performance, it has
                  exceeded my expectations in every way.
                </p>
                <div className="flex">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co/TKYdH3g/girl1.jpg"
                    />
                  </div>
                  <div className="pl-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-white">
                      Mr. x
                    </h2>
                    <h2 className="text-gray-500 dark:text-gray-200 text-sm">
                      DESIGNER
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className=" bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-4 rounded">
                <FaQuoteRight className="w-5 h-5 text-gray-400 mb-4" />
                <p className="leading-relaxed text-start  mb-6">
                  I recently purchased the Apple MacBook Air, and I must say,
                  I&apos;m thoroughly impressed with this fantastic piece of
                  technology. From its design to its performance, it has
                  exceeded my expectations in every way.
                </p>
                <div className="flex">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co/TKYdH3g/girl1.jpg"
                    />
                  </div>
                  <div className="pl-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-white">
                      Mr. x
                    </h2>
                    <h2 className="text-gray-500 dark:text-gray-200 text-sm">
                      DESIGNER
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex">
            <div className="p-4 md:w-1/2 ">
              <div className=" bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-4 rounded">
                <FaQuoteRight className="w-5 h-5 text-gray-400 mb-4" />
                <p className="leading-relaxed text-start  mb-6">
                  I recently purchased the Apple MacBook Air, and I must say,
                  I&apos;m thoroughly impressed with this fantastic piece of
                  technology. From its design to its performance, it has
                  exceeded my expectations in every way.
                </p>
                <div className="flex">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co/TKYdH3g/girl1.jpg"
                    />
                  </div>
                  <div className="pl-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-white">
                      Mr. x
                    </h2>
                    <h2 className="text-gray-500 dark:text-gray-200 text-sm">
                      DESIGNER
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className=" bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-4 rounded">
                <FaQuoteRight className="w-5 h-5 text-gray-400 mb-4" />
                <p className="leading-relaxed text-start  mb-6">
                  I recently purchased the Apple MacBook Air, and I must say,
                  I&apos;m thoroughly impressed with this fantastic piece of
                  technology. From its design to its performance, it has
                  exceeded my expectations in every way.
                </p>
                <div className="flex">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co/TKYdH3g/girl1.jpg"
                    />
                  </div>
                  <div className="pl-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-white">
                      Mr. x
                    </h2>
                    <h2 className="text-gray-500 dark:text-gray-200 text-sm">
                      DESIGNER
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex ">
            <div className="p-4 md:w-1/2 ">
              <div className=" bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-4 rounded">
                <FaQuoteRight className="w-5 h-5 text-gray-400 mb-4" />
                <p className="leading-relaxed text-start  mb-6">
                  I recently purchased the Apple MacBook Air, and I must say,
                  I&apos;m thoroughly impressed with this fantastic piece of
                  technology. From its design to its performance, it has
                  exceeded my expectations in every way.
                </p>
                <div className="flex">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co/TKYdH3g/girl1.jpg"
                    />
                  </div>
                  <div className="pl-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-white">
                      Mr. x
                    </h2>
                    <h2 className="text-gray-500 dark:text-gray-200 text-sm">
                      DESIGNER
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className=" bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-4 rounded">
                <FaQuoteRight className="w-5 h-5 text-gray-400 mb-4" />
                <p className="leading-relaxed text-start  mb-6">
                  I recently purchased the Apple MacBook Air, and I must say,
                  I&apos;m thoroughly impressed with this fantastic piece of
                  technology. From its design to its performance, it has
                  exceeded my expectations in every way.
                </p>
                <div className="flex">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co/TKYdH3g/girl1.jpg"
                    />
                  </div>
                  <div className="pl-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-white">
                      Mr. x
                    </h2>
                    <h2 className="text-gray-500 dark:text-gray-200 text-sm">
                      DESIGNER
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex ">
            <div className="p-4 md:w-1/2 ">
              <div className=" bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-4 rounded">
                <FaQuoteRight className="w-5 h-5 text-gray-400 mb-4" />
                <p className="leading-relaxed text-start  mb-6">
                  I recently purchased the Apple MacBook Air, and I must say,
                  I&apos;m thoroughly impressed with this fantastic piece of
                  technology. From its design to its performance, it has
                  exceeded my expectations in every way.
                </p>
                <div className="flex">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co/TKYdH3g/girl1.jpg"
                    />
                  </div>
                  <div className="pl-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-white">
                      Mr. x
                    </h2>
                    <h2 className="text-gray-500 dark:text-gray-200 text-sm">
                      DESIGNER
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className=" bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-4 rounded">
                <FaQuoteRight className="w-5 h-5 text-gray-400 mb-4" />
                <p className="leading-relaxed text-start  mb-6">
                  I recently purchased the Apple MacBook Air, and I must say,
                  I&apos;m thoroughly impressed with this fantastic piece of
                  technology. From its design to its performance, it has
                  exceeded my expectations in every way.
                </p>
                <div className="flex">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co/TKYdH3g/girl1.jpg"
                    />
                  </div>
                  <div className="pl-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-white">
                      Mr. x
                    </h2>
                    <h2 className="text-gray-500 dark:text-gray-200 text-sm">
                      DESIGNER
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex ">
            <div className="p-4 md:w-1/2 ">
              <div className=" bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-4 rounded">
                <FaQuoteRight className="w-5 h-5 text-gray-400 mb-4" />
                <p className="leading-relaxed text-start  mb-6">
                  I recently purchased the Apple MacBook Air, and I must say,
                  I&apos;m thoroughly impressed with this fantastic piece of
                  technology. From its design to its performance, it has
                  exceeded my expectations in every way.
                </p>
                <div className="flex">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co/TKYdH3g/girl1.jpg"
                    />
                  </div>
                  <div className="pl-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-white">
                      Mr. x
                    </h2>
                    <h2 className="text-gray-500 dark:text-gray-200 text-sm">
                      DESIGNER
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className=" bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-4 rounded">
                <FaQuoteRight className="w-5 h-5 text-gray-400 mb-4" />
                <p className="leading-relaxed text-start  mb-6">
                  I recently purchased the Apple MacBook Air, and I must say,
                  I&apos;m thoroughly impressed with this fantastic piece of
                  technology. From its design to its performance, it has
                  exceeded my expectations in every way.
                </p>
                <div className="flex">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co/TKYdH3g/girl1.jpg"
                    />
                  </div>
                  <div className="pl-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-white">
                      Mr. x
                    </h2>
                    <h2 className="text-gray-500 dark:text-gray-200 text-sm">
                      DESIGNER
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex ">
            <div className="p-4 md:w-1/2 ">
              <div className=" bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-4 rounded">
                <FaQuoteRight className="w-5 h-5 text-gray-400 mb-4" />
                <p className="leading-relaxed text-start  mb-6">
                  I recently purchased the Apple MacBook Air, and I must say,
                  I&apos;m thoroughly impressed with this fantastic piece of
                  technology. From its design to its performance, it has
                  exceeded my expectations in every way.
                </p>
                <div className="flex">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co/TKYdH3g/girl1.jpg"
                    />
                  </div>
                  <div className="pl-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-white">
                      Mr. x
                    </h2>
                    <h2 className="text-gray-500 dark:text-gray-200 text-sm">
                      DESIGNER
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className=" bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-4 rounded">
                <FaQuoteRight className="w-5 h-5 text-gray-400 mb-4" />
                <p className="leading-relaxed text-start  mb-6">
                  I recently purchased the Apple MacBook Air, and I must say,
                  I&apos;m thoroughly impressed with this fantastic piece of
                  technology. From its design to its performance, it has
                  exceeded my expectations in every way.
                </p>
                <div className="flex">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co/TKYdH3g/girl1.jpg"
                    />
                  </div>
                  <div className="pl-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-white">
                      Mr. x
                    </h2>
                    <h2 className="text-gray-500 dark:text-gray-200 text-sm">
                      DESIGNER
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex ">
            <div className="p-4 md:w-1/2 ">
              <div className=" bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-4 rounded">
                <FaQuoteRight className="w-5 h-5 text-gray-400 mb-4" />
                <p className="leading-relaxed text-start  mb-6">
                  I recently purchased the Apple MacBook Air, and I must say,
                  I&apos;m thoroughly impressed with this fantastic piece of
                  technology. From its design to its performance, it has
                  exceeded my expectations in every way.
                </p>
                <div className="flex">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co/TKYdH3g/girl1.jpg"
                    />
                  </div>
                  <div className="pl-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-white">
                      Mr. x
                    </h2>
                    <h2 className="text-gray-500 dark:text-gray-200 text-sm">
                      DESIGNER
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className=" bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-4 rounded">
                <FaQuoteRight className="w-5 h-5 text-gray-400 mb-4" />
                <p className="leading-relaxed text-start  mb-6">
                  I recently purchased the Apple MacBook Air, and I must say,
                  I&apos;m thoroughly impressed with this fantastic piece of
                  technology. From its design to its performance, it has
                  exceeded my expectations in every way.
                </p>
                <div className="flex">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co/TKYdH3g/girl1.jpg"
                    />
                  </div>
                  <div className="pl-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-white">
                      Mr. x
                    </h2>
                    <h2 className="text-gray-500 dark:text-gray-200 text-sm">
                      DESIGNER
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex">
            <div className="p-4 md:w-1/2 ">
              <div className=" bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-4 rounded">
                <FaQuoteRight className="w-5 h-5 text-gray-400 mb-4" />
                <p className="leading-relaxed text-start  mb-6">
                  I recently purchased the Apple MacBook Air, and I must say,
                  I&apos;m thoroughly impressed with this fantastic piece of
                  technology. From its design to its performance, it has
                  exceeded my expectations in every way.
                </p>
                <div className="flex">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co/TKYdH3g/girl1.jpg"
                    />
                  </div>
                  <div className="pl-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-white">
                      Mr. x
                    </h2>
                    <h2 className="text-gray-500 dark:text-gray-200 text-sm">
                      DESIGNER
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className=" bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-4 rounded">
                <FaQuoteRight className="w-5 h-5 text-gray-400 mb-4" />
                <p className="leading-relaxed text-start  mb-6">
                  I recently purchased the Apple MacBook Air, and I must say,
                  I&apos;m thoroughly impressed with this fantastic piece of
                  technology. From its design to its performance, it has
                  exceeded my expectations in every way.
                </p>
                <div className="flex">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co/TKYdH3g/girl1.jpg"
                    />
                  </div>
                  <div className="pl-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-white">
                      Mr. x
                    </h2>
                    <h2 className="text-gray-500 dark:text-gray-200 text-sm">
                      DESIGNER
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default TestimonialsSlide;
