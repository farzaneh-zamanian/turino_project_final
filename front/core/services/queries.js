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
// enabled flase because with an action we need to get the tour
const useGetSearchedTours = (query) => {
      const url = "tour?" + QueryString.stringify(query);
      const queryFn = () => api.get(url);
      const queryKey = ["tour", query];
      return useQuery({ queryFn, queryKey, enabled: false });//request doesnot work till we click a button 
};

// Get Basket tour information
const useGetBasket = () => {
      const queryFn = () => api.get("/basket");
      const queryKey = ["user-basket"];

      return useQuery({ queryFn, queryKey });
};


const useGetUserTour = (tourId) => {
      const queryKey = ["user-data", tourId];
      const queryFn = async () => {
            const response = await api.get(`/tour/${tourId}`);
            return response.data;
      };
      return useQuery({ queryKey, queryFn });
}

const useGetUserAllTours = () => {
      const queryFn = () => api.get("user/tours");
      const queryKey = ["user-tours"];

      return useQuery({ queryFn, queryKey });
};


const useGetUserTransactions = () => {
      const queryFn = () => api.get("user/transactions");
      const queryKey = ["user-transaction"];

      return useQuery({ queryFn, queryKey });
};









export {
      useGetUserData, useGetSearchedTours, useGetBasket,
      useGetUserTransactions, useGetUserTour, useGetUserAllTours
};
