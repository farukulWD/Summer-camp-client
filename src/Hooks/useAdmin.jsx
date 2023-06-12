import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

import useSecure from "./useSecure";

const useAdmin = () => {
  const [axiosSecure] = useSecure();
  const { user, loading } = useAuth();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/admin/${user?.email}`);

      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
