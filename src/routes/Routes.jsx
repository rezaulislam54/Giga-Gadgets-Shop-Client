import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LogINPage";
import RegisterPage from "../pages/RegisterPage";
import MyCartPage from "../pages/MyCartPage";
import AddProductPage from "../pages/AddProductPage";
import MyAddedProductPage from "../pages/MyAddedProductPage";

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
        path: "/my-added",
        element: <MyAddedProductPage></MyAddedProductPage>,
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
