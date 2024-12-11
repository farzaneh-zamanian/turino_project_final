import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../configs/api";



// Send the mobile number as request and recieve the OTP as response
const useSendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);
  return useMutation({ mutationFn });
};

// Send the mobile number and otp code as request and recieve the access token and refresh token
const useCheckOtp = () => {
  const mutationFn = (data) => api.post("auth/check-otp", data);
  return useMutation({ mutationFn });
};



export { useSendOtp, useCheckOtp };
