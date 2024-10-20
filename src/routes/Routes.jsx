import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LogINPage";
import RegisterPage from "../pages/RegisterPage";
import MyCartPage from "../pages/MyCartPage";
import AddProductPage from "../pages/AddProductPage";
import MyAddedProductPage from "../pages/MyAddedProductPage";
import BrandProductPage from "../pages/BrandProductPage";
import ProductDetails from "../pages/ProductDetails";
import PrivetRoutes from "./PrivetRoutes";
import ProductUpdate from "../pages/ProductUpdate";

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
        element: (
          <PrivetRoutes>
            <MyCartPage></MyCartPage>
          </PrivetRoutes>
        ),
      },
      {
        path: "/myadded",
        element: (
          <PrivetRoutes>
            <MyAddedProductPage></MyAddedProductPage>
          </PrivetRoutes>
        ),
      },
      {
        path: "/products/:brand",
        element: <BrandProductPage></BrandProductPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/brand/${params.brand}`),
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },

      {
        path: "/product/update/:id",
        element: (
          <PrivetRoutes>
            <ProductUpdate></ProductUpdate>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
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
