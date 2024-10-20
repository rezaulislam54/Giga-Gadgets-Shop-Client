import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authContext/AuthContext";
import ProductCard from "../components/ProductCard";

const MyAddedProductPage = () => {
  const { user } = useContext(AuthContext);
  const [items, setitems] = useState();
  console.log(items);

  const url = `http://localhost:5000/products/email/${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setitems(data));
  }, [url]);

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mt-10">
        {items?.map((item) => (
          <ProductCard key={item._id} item={item} myproducts={true} />
        ))}
      </div>
    </div>
  );
};

export default MyAddedProductPage;
