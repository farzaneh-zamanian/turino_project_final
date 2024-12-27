"use client";

import useQuery from "@/core/hooks/query";
import Link from "next/link";

function PaymentPage() {
  const { getQuery } = useQuery();

  const status = getQuery("status");

  if (status === "success")
    return (

      <div className="flex flex-col gap-4 items-center justify-center my-[5rem]  w-6/12 h-[20rem] bg-accentButtonColor ">
        <p className=' text-[2rem]'>
          پرداخت شما با موفقیت انجام شد
        </p>
        <Link href="/userProfile/tours" className='bg-secondary text-center w-[13.6rem] md:w-[17.5rem] md:h-[4.1rem] h-[3.8rem] rounded-[0.9rem]  '>
          <span className='text-white  text-[1.4rem] md:text-[1.6rem] '>برو به  پروفایل </span>
        </Link>
      </div>

    );

  return (
    <div className="flex flex-col gap-4 items-center justify-center my-[5rem]  w-6/12 h-[20rem] bg-accentButtonColor ">
      <p className=' text-[2rem]'>
        پرداخت  انجام نشد
      </p>
    </div>
  );
}

export default PaymentPage;
