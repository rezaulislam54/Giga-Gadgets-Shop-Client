import { useNavigate } from "react-router-dom";

const BrandCard = ({ brands }) => {
  const navigate = useNavigate();
  const { brandName, imageURL } = brands || {};
  return (
    <div
      onClick={() => navigate(`/products/${brandName}`)}
      className=" w-full group  cursor-pointer "
    >
      <div className=" shadow-lg p-5 w-full bg-white dark:bg-[#1a2641d5] border rounded">
        <img
          className="w-full h-[150px] object-contain rounded-md"
          src={imageURL}
          alt=""
        />
        <div className=" w-full group-hover:bg-[#ab3154] rounded h-10 mt-2 bg-[#FF497C] flex justify-center items-center">
          <p className="text-center font-bold text-white">{brandName}</p>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
