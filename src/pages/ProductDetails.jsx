// import { useState } from "react";
import { FaFacebookF, FaHeart, FaTwitter } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);
  const { image, brandName, rating, productName, description, price, type } =
    product;

  return (
    <div className="gadgetContainer my-20 flex gap-10">
      <div className="p-4 border rounded-sm">
        <img src={image} alt="" />
      </div>
      <div className="mt-6">
        <div className="border-b-2 pb-2">
          <h2>{brandName}</h2>
          <h1 className="text-2xl font-semibold">{productName}</h1>
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
  );
};

export default ProductDetails;
