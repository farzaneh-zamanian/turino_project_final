import axios from "axios";

//API
const api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      headers: {
            "Content-Type": "application/json"
      }
})

// REQUEST INTERCEPTOR
api.interceptors.request.use((request) => {
      return request;
},
      (error) => {
            return Promise.reject(error); // Handle request errors
      });


// RESPONSE INTERCEPTOR
api.interceptors.response.use(
      (response) => {
            return response; // Return the response object
      },
      (error) => {
            return Promise.reject(error); // Handle request errors
      });

export { api }

