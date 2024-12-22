"use client"
import { useQuery } from "@tanstack/react-query";
import { api } from "../configs/api";


// GET user profile data 
const useGetUserData = () => {
      const queryKey = ["user-data"];
      const queryFn = async () => {
            const response = await api.get("/user/profile");
            return response.data; 
      };
      return useQuery({ queryKey, queryFn });
}



export { useGetUserData };
