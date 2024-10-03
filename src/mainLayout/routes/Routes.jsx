import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Homepage from "../../pages/Homepage";
import LoginPage from "../../pages/LogINPage";
import RegisterPage from "../../pages/RegisterPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element:<Homepage></Homepage>,
        },
        {
          path: "/login",
          element: <LoginPage></LoginPage>
        },
        {
          path:"/register",
          element: <RegisterPage></RegisterPage>
        }
    ]
  },
]);
export default Routes;