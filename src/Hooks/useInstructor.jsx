import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";
import useSecure from "./useSecure";

const useInstructor = () => {
  const [axiosSecure] = useSecure();
  const { user, loading } = useAuth();
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/instructor/${user?.email}`);
      return res.data.instructor;
    },
  });
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
