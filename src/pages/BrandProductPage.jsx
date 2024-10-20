import { useLoaderData, useParams } from "react-router-dom";
// import ProductCard from "../components/Cards/ProductCard";
import BrandAdvertise from "../components/header/BrandAdvertise";
import ProductCard from "../components/ProductCard";
import { TbCategoryFilled } from "react-icons/tb";

const BrandProductPage = () => {
  const brandProduct = useLoaderData();
  const { brand } = useParams();
  return (
    <div className="">
      <BrandAdvertise />

      <div className="container mx-auto">
        {/* header */}
        <div className="text-center md:text-left mt-16">
          <div className="font-semibold flex items-center text-[#FF497C] md:mb-3 justify-center md:justify-start md:text-left">
            <h2 className="bg-[#FF497C] text-white text-xl h-8 w-8 flex items-center mr-3 p-2 rounded-full">
              <TbCategoryFilled />
            </h2>
            <h2>Top Brands</h2>
          </div>
          <p className="text-[32px] lg:text-[40px] font-semibold dark:text-white">
            {brand}
          </p>
        </div>

        {/* {products} */}

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-4 mt-10">
          {brandProduct?.map((product) => (
            <ProductCard key={product._id} item={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandProductPage;
