import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authContext/AuthContext";
import ProductCard from "../components/ProductCard";

const MyAddedProductPage = () => {
  const { user, setloading } = useContext(AuthContext);
  const [items, setitems] = useState();
  console.log(items);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setitems(data);
        setloading(false);
      });
  }, [user]);

  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mt-10">
        {items?.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyAddedProductPage;
