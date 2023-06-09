import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import RingLoader from "react-spinners/RingLoader";

const PrivetRoutes = ({ children }) => {
  const { user, loader } = useAuth();
  const location = useLocation();

  if (loader) {
    return (
      <div>
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
