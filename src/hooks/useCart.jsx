import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
const useCart = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    // queryFn: async () => {
    //   const response = await fetch(
    //     `https://restro-98-server-ashfiq98.vercel.app/carts?email=${user.email}`,
    //     {
    //       headers: {
    //         authorization: `bearer ${token}`,
    //       },
    //     }
    //   );
    //   return response.json();
    // },
    queryFn: async () => {
      const response = await axiosSecure(`/carts?email=${user.email}`);

      console.log("response from axios ", response);
      return response.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
