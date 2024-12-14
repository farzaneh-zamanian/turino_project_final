import { useQuery } from "@tanstack/react-query";
import { api } from "../configs/api";


// const useGetUserProfile = () => {
//       const queryKey = ["user_profile"];
//       const queryFn = async () => {
//             try {
//                   const res = await api.get("/user/profile");
//                   return res.data
//             } catch (error) {
//                   throw new Error(error.message)

//             }
//       }
//       return useQuery({ queryKey, queryFn });
// };

const useGetUserProfile = (accessToken) => {
      const queryKey = ["user_profile"];
      const queryFn = async () => {
            if (!accessToken) {
                  return null; // Return null if no access token is provided
            }
            try {
                  const res = await api.get("/user/profile");
                  return res.data
            } catch (error) {
                  throw new Error(error.message)

            }
      }
      return useQuery({
            queryKey, queryFn, enabled: !!accessToken, // Only run the query if accessToken is available
      });
};

export { useGetUserProfile };
