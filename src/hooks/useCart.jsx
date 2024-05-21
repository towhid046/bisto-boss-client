import {
  useQuery,
} from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {refetch, isLoading, data: carts = [] } = useQuery({
    queryKey: [ "carts", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });

  return {carts, refetch, isLoading};
};

export default useCart;
