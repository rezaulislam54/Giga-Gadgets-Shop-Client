import { useLoaderData } from "react-router-dom";

const MyAddedProductPage = () => {
  const items = useLoaderData();
  console.log(items);
  return (
    <div>
      <p>my added product Page{items.leangth} </p>
    </div>
  );
};

export default MyAddedProductPage;
