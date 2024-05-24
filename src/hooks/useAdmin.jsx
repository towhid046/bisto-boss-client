import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const email = user?.email;
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin } = useQuery({
    queryKey: [email, "isAdmin"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/admin/${email}`);
      return data.admin;
    },
  });
  return { isAdmin };
};

export default useAdmin;
