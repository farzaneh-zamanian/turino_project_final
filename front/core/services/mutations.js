import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../configs/api";
import { setCookie } from "../utils/cookie";


// POST request handlers
// Send the mobile number as request and recieve the OTP as response
const useSendOtp = () => {
  const mutationFn = (data) => api.post("/auth/send-otp", data);
  return useMutation({ mutationFn });
};


// POST request handlers
// Send the mobile number and otp code as request and recieve the access token and refresh token
const useCheckOtp = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.post("auth/check-otp", data);
  const onSuccess = (data) => {
    setCookie("accessToken", data?.data?.accessToken, 30);
    setCookie("refreshToken", data?.data?.refreshToken, 365);
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };
  return useMutation({ mutationFn, onSuccess });
};


// PUT 


export { useSendOtp, useCheckOtp };
