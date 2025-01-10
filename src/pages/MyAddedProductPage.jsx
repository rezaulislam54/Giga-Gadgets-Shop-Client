import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authContext/AuthContext";
import ProductCard from "../components/ProductCard";
import Swal from "sweetalert2";

const MyAddedProductPage = () => {
  const { user } = useContext(AuthContext);
  const [items, setitems] = useState();
  console.log(items);

  const handleProductDelete = (_id) => {
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
        fetch(`https://giga-gadgets-shop-server.vercel.app/products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remainingmy = items.filter((c) => c._id !== _id);
            setitems(remainingmy);
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

  const url = `https://giga-gadgets-shop-server.vercel.app/products/email/${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setitems(data));
  }, [url]);

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mt-10">
        {items?.map((item) => (
          <ProductCard
            key={item._id}
            item={item}
            handleProductDelete={handleProductDelete}
            myproducts={true}
          />
        ))}
      </div>
    </div>
  );
};

export default MyAddedProductPage;
