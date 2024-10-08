import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LogINPage";
import RegisterPage from "../pages/RegisterPage";
import MyCartPage from "../pages/MyCartPage";
import AddProductPage from "../pages/AddProductPage";
import MyAddedProductPage from "../pages/MyAddedProductPage";
import BrandProductPage from "../pages/BrandProductPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/add-product",
        element: <AddProductPage></AddProductPage>,
      },
      {
        path: "/my-cart",
        element: <MyCartPage></MyCartPage>,
      },
      {
        path: "/myadded/:email",
        element: <MyAddedProductPage></MyAddedProductPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.email}`),
      },
      {
        path: "/products/:brand",
        element: <BrandProductPage></BrandProductPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.brand}`),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
]);
export default Routes;
