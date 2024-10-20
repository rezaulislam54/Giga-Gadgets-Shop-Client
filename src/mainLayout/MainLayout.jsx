import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;