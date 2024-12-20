import axios from "axios";
import { getCookie, setCookie } from "../utils/cookie";

//API
const api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      headers: {
            "Content-Type": "application/json"
      }
})

// REQUEST INTERCEPTOR
api.interceptors.request.use(
      (request) => {
            // get the accesstoken and set access token in the headers of request
            const accessToken = getCookie("accessToken");
            if (accessToken) {
                  request.headers["Authorization"] = `Bearer ${accessToken}`;
            }
            return request;
      },
      // if there is no access token
      (error) => {
            return Promise.reject(error);
      }
);

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
      // get response headers
      (response) => {
            return response;
      },
      // if there is no response and error
      async (error) => {
            const orginialRequest = error.config;//all info of request that failed
            //   401 - access token is required - exprired or not existing
            // orginialRequest._retry , retry means send the request again if it was false
            if (error.response.status === 401 && !orginialRequest._retry) {
                  // change retry to true to send it again
                  orginialRequest._retry = true;
                  const res = await getNewTokens();//send refresh token to server and get new access token
                  //     if response exist 
                  if (res?.response?.status === 201) {
                        setCookie("accessToken", res?.response?.data.accessToken, 30);
                        setCookie("refreshToken", res?.response?.data.refreshToken, 360);
                        return api(orginialRequest);//get orginialRequest as parameter to api to send the request again
                  }
                  //  else {
                  //       setCookie("accessToken", "", 0);
                  //       setCookie("refreshToken", "", 0);
                  // }
            }
            return Promise.reject(error.response.data);
      }
);
export { api }


// send refresh token to get new access token
const getNewTokens = async () => {
      const refreshToken = getCookie("refreshToken");//get it from cookie
      if (!refreshToken) return;//if not existing

      // if existing refresh token
      try {
            const response = await axios.post(
                  `${process.env.NEXT_PUBLIC_BASE_URL}auth/refresh-token`,
                  {
                        refreshToken: refreshToken,
                  }
            );
            return { response };//in form object return it
      } catch (error) {
            return { error };
      }
};

