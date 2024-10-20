// import { useState } from "react";
import { FaFacebookF, FaHeart, FaTwitter } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { FaBagShopping } from "react-icons/fa6";

const ProductDetails = () => {
  const [Products, setproducts] = useState([]);
  const product = useLoaderData();
  console.log(product);
  const { image, name, rating, brand, description, price, type } = product;

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
      });
  }, []);

  return (
    <div className="container mx-auto my-20">
      <div className=" flex gap-10">
        <div className="p-4 border rounded-lg flex-1 flex items-center justify-center ">
          <img className="rounded-lg w-11/12 h-4/5" src={image} alt="" />
        </div>
        <div className="mt-6 flex-1">
          <div className="border-b-2 pb-2">
            <h2>{brand}</h2>
            <h1 className="text-2xl font-semibold my-2">{name}</h1>
            <div className="flex gap-5 my-2">
              <p className="border-r-2 pr-4"> Rating : {rating}</p>
              <div className="flex gap-2 text-xl">
                <FaFacebookF />
                <FaTwitter />
                <BiSolidMessageRounded />
              </div>
            </div>
            <p className="max-w-2xl my-3">{description}</p>
            <h2 className="my-4">
              <span className="font-semibold mr-2">Type : </span>
              {type}
            </h2>
          </div>
          <div className="flex justify-between items-center mt-5">
            <h2 className="font-medium">
              <span className="font-semibold mr-2">Price : </span>${price}
            </h2>
            <div className="flex gap-3">
              <button className="text-white bg-[#ff497c] px-5 py-1 rounded-sm">
                Add to Cart
              </button>
              <p className="bg-[#e5e7eb] p-2 rounded-full">
                <FaHeart />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center md:text-left mt-20">
        <div className="font-semibold flex items-center text-[#FF497C] md:mb-3 justify-center md:justify-start md:text-left">
          <h2 className="bg-[#FF497C] text-white text-xl h-8 w-8 flex items-center mr-3 p-2 rounded-full">
            <FaBagShopping />
          </h2>
          <h2>More Products</h2>
        </div>
        <p className="text-[32px] lg:text-[40px] font-semibold dark:text-white">
          Countinue To Shopping
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
        {Products?.slice(10, 18)?.map((item) => (
          <ProductCard key={item._id} item={item}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
