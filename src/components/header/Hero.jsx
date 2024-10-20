import heroImg1 from "../../assets/Hero/2.png";
import heroImg3 from "../../assets/Hero/applelaptop.png";
import { EffectFade, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "../../components/Swiper.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { SiFireship } from "react-icons/si";
import { BiHive } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="h-[550px] bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4]">
      <div className="container mx-auto">
        <Swiper
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
          className="mySwiper"
        >
          {/* slide 1 */}
          <SwiperSlide>
            <div className="md:h-[500px] h-auto">
              <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
                <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
                  <div className="font-semibold flex items-center text-[#FF497C] md:mb-3 justify-center md:justify-start md:text-left">
                    <h2 className="bg-[#FF497C] text-white text-xl h-8 w-8 flex items-center mr-3 p-2 rounded-full">
                      <SiFireship />
                    </h2>
                    <h2>Top Brands</h2>
                  </div>

                  <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                    Discover the Future <br />
                    of Electronics
                  </p>
                  <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                    Stay ahead with the latest tech trends and innovations.
                  </p>

                  <div className="flex justify-center md:justify-start">
                    <button className="flex items-center bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                      <span className="mr-3">
                        <BiHive />
                      </span>
                      Explore Now
                    </button>
                  </div>
                </div>

                {/* left */}
                <div className="w-full md:max-h-[400px] h-[250px] flex-1 mb-10 md:mb-0">
                  <img
                    className="h-full object-cover w-full"
                    src={heroImg1}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* slide 2 */}
          <SwiperSlide>
            <div className="md:h-[500px] h-auto">
              <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
                <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
                  <div className="font-semibold flex justify-center md:justify-start items-center text-[#FF497C] md:mb-3 text-center md:text-left">
                    <h2 className="bg-[#FF497C] text-white text-xl h-8 w-8 flex items-center mr-3 p-2 rounded-full">
                      <SiFireship />
                    </h2>
                    <h2>Top Brands</h2>
                  </div>

                  <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                    Your Trusted Source for <br />
                    Quality Gadgets
                  </p>
                  <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                    Explore a wide range of cutting-edge electronic devices
                  </p>

                  <div className="flex justify-center md:justify-start">
                    <button className="flex items-center bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                      <span className="mr-3">
                        <BiHive />
                      </span>
                      Explore Now
                    </button>
                  </div>
                </div>

                {/* left */}
                <div className="w-full md:max-h-[400px]  flex-1 mb-10 md:mb-0">
                  <img
                    className="md:h-[300px] h-[250px] object-cover w-full"
                    src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1729418856/1-1-removebg-preview_z4i2jt.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* slide 3 */}
          <SwiperSlide>
            <div className="md:h-[500px] h-auto">
              <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
                <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
                  <div className="font-semibold flex justify-center md:justify-start items-center text-[#FF497C] md:mb-3 text-center md:text-left">
                    <h2 className="bg-[#FF497C] text-white text-xl h-8 w-8 flex items-center mr-3 p-2 rounded-full">
                      <SiFireship />
                    </h2>
                    <h2>Top Brands</h2>
                  </div>

                  <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                    Shop Smart, Shop <br /> TechWonders
                  </p>
                  <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                    Find the perfect tech solutions for your lifestyle.
                  </p>

                  <div className="flex justify-center md:justify-start">
                    <button className="flex items-center bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                      <span className="mr-3">
                        <BiHive />
                      </span>
                      Explore Now
                    </button>
                  </div>
                </div>

                {/* left */}
                <div className="w-full max-h-[400px] flex-1 mb-10 md:mb-0">
                  <img
                    className="h-full object-cover w-full"
                    src={heroImg3}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
