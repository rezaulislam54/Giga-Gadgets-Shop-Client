import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";

const MainLayout = () => {
    return (
      <div className="">
        <Navber></Navber>
        <Outlet></Outlet>
      </div>
    );
};

export default MainLayout;