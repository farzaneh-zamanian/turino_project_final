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


// PUT - user profile information request
const useUpdateUserBankAccount = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.put("user/profile", data);
  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };
  return useMutation({ mutationFn, onSuccess });
};

// PUT - add tour to the basket
const useAddTourToBasket = () => {
  const queryClient = useQueryClient();
  const mutationFn = (tourId) => api.put(`basket/${tourId}`);
  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };
  return useMutation({ mutationFn, onSuccess });

}
// POST - check out the tour
const useCheckout = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.post("/order", data);
  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };
  return useMutation({ mutationFn, onSuccess });
}



export {
  useSendOtp,
  useCheckOtp,
  useUpdateUserBankAccount,
  useAddTourToBasket,
  useCheckout,
};
