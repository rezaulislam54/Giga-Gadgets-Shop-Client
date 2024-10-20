import { useContext, useState } from "react";
import { AuthContext } from "../authContext/AuthContext";
import { RiDeleteBinLine } from "react-icons/ri";

const CartProduct = ({ product, handleProductDelete }) => {
  const { _id, name, brand, price, image } = product;

  const { user } = useContext(AuthContext);

  const [totalquantity, settotalquantity] = useState(1);

  const handlePlese = (e) => {
    e.preventDefault();
    settotalquantity(totalquantity + 1);
  };

  const handleMaines = (e) => {
    e.preventDefault();
    settotalquantity(totalquantity - 1);
  };

  const totalprice = price * totalquantity;

  return (
    <div className=" relative grid items-center border grid-cols-6 md:px-8 mt-8">
      <div className="absolute top-4 right-5 text-xl font-bold">
        <button onClick={() => handleProductDelete(_id)}>
          <RiDeleteBinLine className="text-2xl" />
        </button>
      </div>
      <div className="col-span-2">
        <div className="flex gap-5 md:gap-0 items-center">
          <div className="flex-1">
            <img className="size-28" src={image} />
          </div>
          <div>
            <h2 className="font-semibold mb-1">{name}</h2>
            <p>{brand}</p>
          </div>
        </div>
      </div>
      <div className="flex ml-4 justify-evenly col-span-4">
        <div className="flex gap-4 text-[16px]">
          <button onClick={handleMaines}>-</button>
          <h1>{totalquantity}</h1>
          <button onClick={handlePlese}>+</button>
        </div>
        <h2>${price}</h2>
        <h2>${totalprice}</h2>
      </div>
    </div>
  );
};

export default CartProduct;
