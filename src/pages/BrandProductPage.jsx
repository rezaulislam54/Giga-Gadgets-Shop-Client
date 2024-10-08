import { useLoaderData, useParams } from "react-router-dom";
// import ProductCard from "../components/Cards/ProductCard";
import BrandAdvertise from "../components/header/BrandAdvertise";
import ProductCard from "../components/ProductCard";

const BrandProductPage = () => {
  const brandProduct = useLoaderData();
  console.log(brandProduct);
  const { brand } = useParams();
  return (
    <div className="">
      <BrandAdvertise />

      <div className="container mx-auto">
        {/* header */}
        <div className="text-center md:text-left mt-16">
          <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
            <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
              <i className="bx bxs-category"></i>
            </span>
            Top Brands
          </p>
          <p className="text-[32px] lg:text-[40px] font-semibold dark:text-white">
            {brand}
          </p>
        </div>

        {/* {products} */}

        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mt-10">
          {brandProduct?.map((product) => (
            <ProductCard key={product._id} item={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandProductPage;
