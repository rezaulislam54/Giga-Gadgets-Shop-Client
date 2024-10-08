import { useEffect, useState } from "react";
import Hero from "../components/header/Hero";
import BrandCard from "../components/BrandCard";
import ProductCard from "../components/ProductCard";
import { FaQuoteRight } from "react-icons/fa";

const Homepage = () => {
  const [brandName, setbrandName] = useState([]);
  const [products, setproducts] = useState([]);
  const [productslength, setproductslength] = useState(6);

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
          <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
            <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
              <i className="bx bxs-category"></i>
            </span>
            Top Brands
          </p>
          <p className="text-[32px] lg:text-[40px] font-semibold dark:text-white">
            Browse By Brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 my-8">
          {brandName?.map((brand) => (
            <BrandCard key={brand._id} brand={brand}></BrandCard>
          ))}
        </div>
      </div>

      {/* Explore Our Product section */}

      <div className="container mx-auto">
        {/* header */}
        <div className="text-center md:text-left mt-20">
          <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
            <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
              <i className="bx bxs-shopping-bag"></i>
            </span>
            Our Products
          </p>
          <p className="text-[32px] lg:text-[40px] font-semibold dark:text-white">
            Explore Our Product
          </p>
        </div>

        {/* Product container */}
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mt-10">
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
      <div className="container mx-auto py-24 mt-20 bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#0F172A] dark:from-10% dark:via-[#0F172A] dark:via-30% dark:to-[#0F172A]">
        {/* header */}
        <div className="text-center md:text-left ">
          <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
            <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
              <i className="bx bxs-quote-single-left"></i>
            </span>
            Testimonial
          </p>
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
    </div>
  );
};

export default Homepage;
