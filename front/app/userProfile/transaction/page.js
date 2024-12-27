"use client"
import { useGetUserTransactions } from '@/core/services/queries';
import { convertToPersianDate } from '@/core/utils/hepler';
import React from 'react';

function UserTransactionsPage() {
  const { data, isPending } = useGetUserTransactions();
  console.log(data);
  
  return (
    <div>
      <div className='w-fill border border-borderColor rounded-xl'>
        <div className='rounded-t-xl bg-gray-400 p-[1rem] flex items-center justify-between'>
          <span className='flex-1 text-center'>تاریخ و ساعت</span>
          <span className='flex-1 text-center'>مبلغ(تومان)</span>
          <span className='flex-1 text-center'>شماره سفارش</span>
        </div>
        {data?.data?.map(tour => (
          <div className='rounded-b-xl p-[1rem] flex items-center justify-between'>
            <span className='flex-1 text-center'>
              {convertToPersianDate(tour.createdAt,"fullDate")}
            </span>
            <span className='flex-1 text-center'>{tour.amount}</span>
            <span className='flex-1 text-center'>101402</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserTransactionsPage;