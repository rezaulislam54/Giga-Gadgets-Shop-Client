import { useEffect, useState } from "react";
import Hero from "../components/header/Hero";
import BrandCard from "../components/BrandCard";
import ProductCard from "../components/ProductCard";
import { FaQuoteRight } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { FaBagShopping } from "react-icons/fa6";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import choose1 from "../assets/whyChoose/1.webp";
import choose2 from "../assets/whyChoose/2.webp";
import choose3 from "../assets/whyChoose/3.webp";
import choose4 from "../assets/whyChoose/4.webp";
import choose5 from "../assets/whyChoose/5.webp";

const Homepage = () => {
  const [brandName, setbrandName] = useState([]);
  const [products, setproducts] = useState([]);
  const [productslength, setproductslength] = useState(8);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => {
        setbrandName(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Hero />
      <div className="container mx-auto">
        <div className="text-center md:text-left mt-16">
          <div className="font-semibold flex items-center text-[#FF497C] md:mb-3 justify-center md:justify-start md:text-left">
            <h2 className="bg-[#FF497C] text-white text-xl h-8 w-8 flex items-center mr-3 p-2 rounded-full">
              <TbCategoryFilled />
            </h2>
            <h2>Top Brands</h2>
          </div>
          <p className="text-[32px] lg:text-[40px] font-semibold dark:text-white">
            Browse By Brands
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 my-8">
          {brandName?.map((brands) => (
            <BrandCard key={brands._id} brands={brands}></BrandCard>
          ))}
        </div>
      </div>

      {/* Explore Our Product section */}

      <div className="container mx-auto">
        {/* header */}
        <div className="text-center md:text-left mt-20">
          <div className="font-semibold flex items-center text-[#FF497C] md:mb-3 justify-center md:justify-start md:text-left">
            <h2 className="bg-[#FF497C] text-white text-xl h-8 w-8 flex items-center mr-3 p-2 rounded-full">
              <FaBagShopping />
            </h2>
            <h2>Our Products</h2>
          </div>
          <p className="text-[32px] lg:text-[40px] font-semibold dark:text-white">
            Explore Our Product
          </p>
        </div>

        {/* Product container */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2  gap-4 mt-10">
          {products?.slice(0 - productslength).map((item) => (
            <ProductCard key={item._id} item={item} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => setproductslength(products.length)}
            className={`text-white bg-blue-500 px-4 py-2 font-semibold rounded-md ${
              productslength === products.length && "hidden"
            }`}
          >
            Show All Product
          </button>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto py-16 mt-20 bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#0F172A] dark:from-10% dark:via-[#0F172A] dark:via-30% dark:to-[#0F172A]">
        {/* header */}
        <div className="text-center md:text-left ">
          <div className="font-semibold flex items-center text-[#FF497C] md:mb-3 justify-center md:justify-start md:text-left">
            <h2 className="bg-[#FF497C] text-white text-xl h-8 w-8 flex items-center mr-3 p-2 rounded-full">
              <BiSolidQuoteSingleLeft />
            </h2>
            <h2>Testimonials</h2>
          </div>
          <p className="text-[32px] lg:text-[40px] font-semibold dark:text-white">
            Users Feedback
          </p>
        </div>

        {/* Container */}
        <div className="text-gray-600 dark:text-gray-200 body-font">
          <div className="mx-auto mt-8">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/2 w-full">
                <div className=" bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-4 rounded">
                  <FaQuoteRight className="w-5 h-5 text-gray-400 mb-4" />
                  <p className="leading-relaxed  mb-6">
                    I recently purchased the Apple MacBook Air, and I must say,
                    I&apos;m thoroughly impressed with this fantastic piece of
                    technology. From its design to its performance, it has
                    exceeded my expectations in every way.
                  </p>
                  <div className="flex">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co/TKYdH3g/girl1.jpg"
                      className="w-12 h-12 rounded-full"
                    />
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
              <div className="p-4 md:w-1/2 w-full">
                <div className=" bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-4 rounded">
                  <FaQuoteRight className="w-5 h-5 text-gray-400 mb-4" />
                  <p className="leading-relaxed  mb-6">
                    The HP Pavilion series is a reliable and affordable line of
                    laptops that are well-suited for everyday computing needs.
                    While it may not be the most powerful or feature-packed
                    laptop on the market, it offers good value for the price.
                  </p>
                  <div className="flex">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co/n1KHYYp/boy1.png"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="pl-4">
                      <h2 className="title-font font-medium text-gray-900 dark:text-white">
                        Mr. Y
                      </h2>
                      <h2 className="text-gray-500 dark:text-gray-200 text-sm">
                        DEVELOPER
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Us section */}
      <div className="container mx-auto">
        {/* header */}
        <div className="text-center md:text-left mt-20">
          <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
            <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
              <i className="bx bxs-like"></i>
            </span>
            Why Us
          </p>
          <p className="text-[32px] lg:text-[40px] font-semibold dark:text-white">
            Why People Choose Us
          </p>
        </div>

        {/* Container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-8">
          <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
            <img src={choose1} alt="" />
            <p className="font-semibold text-lg text-center dark:text-white">
              Fast & Secure <br />
              Delivery
            </p>
          </div>
          <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
            <img src={choose2} alt="" />
            <p className="font-semibold text-lg text-center dark:text-white">
              Money Back <br />
              Guarantee
            </p>
          </div>
          <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
            <img src={choose3} alt="" />
            <p className="font-semibold text-lg text-center dark:text-white">
              24 Hour Return <br />
              Policy
            </p>
          </div>
          <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
            <img src={choose4} alt="" />
            <p className="font-semibold text-lg text-center dark:text-white">
              Pro Quality <br />
              Support
            </p>
          </div>
          <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
            <img src={choose5} alt="" />
            <p className="font-semibold text-lg text-center dark:text-white">
              Next Level Pro <br />
              Quality
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
