import { useQuery } from "@tanstack/react-query";
import { api } from "../configs/api";


const useGetUserProfile = () => {
      const queryKey = ["user_profile"];
      const queryFn = async () => {
            try {
                  const res = await api.get("/user/profile");
                  return res.data
            } catch (error) {
                  throw new Error(error.message)

            }
      }
      return useQuery({ queryKey, queryFn });
};

export { useGetUserProfile };
