import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authContext/AuthContext";

const MyCartPage = () => {
  const { user } = useContext(AuthContext);
  const [items, setitems] = useState();
  const url = `http://localhost:5000/products/email/${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setitems(data));
  }, [url]);

  return (
    <div>
      <p>all products{items?.length}</p>
    </div>
  );
};

export default MyCartPage;
