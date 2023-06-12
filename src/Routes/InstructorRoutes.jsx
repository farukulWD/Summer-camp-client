import { Navigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { RingLoader } from "react-spinners";
import { useEffect, useState } from "react";
import useInstructor from "../Hooks/useInstructor";

const InstructorRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      await Promise.all([isInstructor, isInstructorLoading]);
      setIsReady(true);
    };

    checkAdmin();
  }, []);

  if (!isReady || loading || isInstructorLoading) {
    return (
      <div className="fixed top-[50%] left-[50%]">
        <RingLoader color="#008e48" loading size={91} speedMultiplier={2} />
      </div>
    );
  }

  if (user && isInstructor) {
    return children;
  }

  return <Navigate to="/" replace={true} />;
};

export default InstructorRoutes;
