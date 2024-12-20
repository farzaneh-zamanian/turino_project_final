import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../configs/api";



// Send the mobile number as request and recieve the OTP as response
const useSendOtp = () => {
  const mutationFn = (data) => api.post("/auth/send-otp", data);
  return useMutation({ mutationFn });
};

// const useSendOtp = () => {
//   const mutationFn = async (data) => {
//     const response = await api.post("/auth/send-otp", data);
//     return response.data; // Return the data if needed
//   };

//   return useMutation(mutationFn);
// };

// Send the mobile number and otp code as request and recieve the access token and refresh token
const useCheckOtp = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.post("/auth/check-otp", data);
  const onSuccess = async() => {
    await queryClient.invalidateQueries({queryKey:"user_data"})
  }
  // return useMutation({ mutationFn });
  return useMutation({ mutationFn ,onSuccess});
};



export { useSendOtp, useCheckOtp };
