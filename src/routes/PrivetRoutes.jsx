import { useContext } from "react";
import { AuthContext } from "../authContext/AuthContext";
import { Navigate } from "react-router-dom";
import Spinar from "../components/Spinar";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Spinar />;
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivetRoutes;
