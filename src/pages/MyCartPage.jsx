// import CartProduct from "../components/CartProduct";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authContext/AuthContext";
import CartProduct from "../components/CartProduct";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [myproducts, setmyproducts] = useState([]);
  const url = `https://giga-gadgets-shop-server.vercel.app/carts/email/${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setmyproducts(data);
      });
  }, [url]);

  const handleProductDelete = (email) => {
    const remainingpro = "";
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://giga-gadgets-shop-server.vercel.app/carts/email/${email}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setmyproducts(remainingpro);
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto my-10">
      <Helmet>
        <title>Giga-Gadgets | My Cart</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-4 border rounded-lg px-3 md:px-0 shadow-lg">
        <div className="col-span-3 md:p-6 ">
          <div className="flex justify-between md:mx-10 pb-3 border-b-2">
            <h1 className="text-2xl font-bold">Your Cart</h1>
            <h1 className="text-2xl font-bold">
              <span className="mr-2">{myproducts.length}</span>Items
            </h1>
          </div>
          <div className=" grid grid-cols-7 md:grid-cols-6 px-10 mt-8">
            <div className="col-span-3 md:col-span-2">
              <h2>Product Details</h2>
            </div>
            <div className="flex justify-evenly col-span-4 md:col-span-4">
              <h2>Quantity</h2>
              <h2>Price</h2>
              <h2>Total</h2>
            </div>
          </div>

          {/* Product Container */}
          <div className="my-10 md:px-5">
            {myproducts?.map((product) => (
              <CartProduct
                key={product._id}
                myproducts={myproducts}
                setmyproducts={setmyproducts}
                product={product}
              ></CartProduct>
            ))}
          </div>
        </div>

        <div className=" p-6 md:border-l-2 border-b-2 h-fit rounded-lg">
          <h1 className="text-2xl font-bold border-b-2 pb-3">Order Summary</h1>
          <div className="flex justify-between items-center my-7">
            <h2>
              <span className="mr-2">{myproducts.length}</span>ITEMS{" "}
            </h2>
            <h2>total Price </h2>
          </div>
          <label htmlFor="">SHIPPING</label>
          <br />
          <select className="select select-bordered select-sm w-full mt-2">
            <option disabled selected>
              standard Shipping - $10.00
            </option>
          </select>
          <div className="my-8 space-y-2">
            <label htmlFor="" className="mt-5">
              PROMO CODE
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Code"
              className="input input-bordered input-sm w-full"
            />
          </div>
          <button className="bg-[#ff487c] px-8 py-2 rounded-md text-white">
            APPLY
          </button>
          <div className="divider"></div>
          <div className="flex justify-between items-center font-semibold my-6">
            <h2>TOTAL COST </h2>
            <h2>$total Price </h2>
          </div>
          <button className="bg-[#ff487c] w-full text-center py-2 rounded-md mb-2 text-white">
            CHECHOUT
          </button>
          <button
            onClick={() => handleProductDelete(user.email)}
            className="bg-[#ff487c] w-full mt-4 text-center py-2 rounded-md mb-2 text-white"
          >
            CLEAR ALL CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
