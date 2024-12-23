"use client";

import { useGetUserData } from "@/core/services/queries";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function AuthProvider({ children }) {
  const router = useRouter();
  const { isPending, data } = useGetUserData();

  useEffect(() => {
    // isPending false and no data
    if (!isPending && !data) router.push("/");
  }, [isPending]);

  if (isPending)
    return (
      <p className=" my-[20rem] m-auto bg-green-100 text-green-500 w-fit animate-ping">
        Loading...
      </p>
    );

  return children;
}

export default AuthProvider;
