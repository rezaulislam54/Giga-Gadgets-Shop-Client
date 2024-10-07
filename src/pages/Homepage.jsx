import { useEffect, useState } from "react";
import Hero from "../components/header/Hero";
import BrandCard from "../components/BrandCard";

const Homepage = () => {
  const [brandName, setbrandName] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
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
    </div>
  );
};

export default Homepage;
