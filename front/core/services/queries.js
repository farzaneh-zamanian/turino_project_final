"use client"
import { useQuery } from "@tanstack/react-query";
import { api } from "../configs/api";
import QueryString from "qs";



// GET user profile data 
const useGetUserData = () => {
      const queryKey = ["user-data"];
      const queryFn = async () => {
            const response = await api.get("/user/profile");
            return response.data; 
      };
      return useQuery({ queryKey, queryFn });
}

// Get tour accordign user search
const useGetTours = (query) => {
      const url = "tour?" + QueryString.stringify(query);
    
      const queryFn = () => api.get(url);
      const queryKey = ["tour", query];
    
      return useQuery({ queryFn, queryKey, enabled: false });//request doesnot work till we click a button 
    };
    



export { useGetUserData,useGetTours };
