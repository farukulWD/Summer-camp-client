import { Navigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { RingLoader } from "react-spinners";
import { useEffect, useState } from "react";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      await Promise.all([isAdmin, isAdminLoading]);
      setIsReady(true);
    };

    checkAdmin();
  }, []);

  if (!isReady || loading || isAdminLoading) {
    return (
      <div className="fixed top-[50%] left-[50%]">
        <RingLoader color="#008e48" loading size={91} speedMultiplier={2} />
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" replace={true} />;
};

export default AdminRoutes;
