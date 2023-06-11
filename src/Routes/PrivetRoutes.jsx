import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import RingLoader from "react-spinners/RingLoader";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="fixed top-[50%] left-[50%]">
        <RingLoader color="#008e48" loading size={91} speedMultiplier={2} />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return (
    <Navigate state={{ from: location }} to="/login" replace={true}></Navigate>
  );
};

export default PrivetRoutes;
