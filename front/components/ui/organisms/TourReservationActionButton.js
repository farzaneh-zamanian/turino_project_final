"use client"
import { useUpdateUserTour } from '@/core/services/mutations';
import React from 'react'
import toast from 'react-hot-toast';
import Button from '../atoms/Button';
import { useRouter } from 'next/navigation';

function TourReservationActionButton({ tourId }) {
      const router = useRouter()
      const { mutate, isPending } = useUpdateUserTour();


      const tourReservationHandler = (tourId) => {
            if (isPending) return; // Prevent submission if pending
            mutate(tourId, {
                  onSuccess: (response) => {
                        console.log(response)
                        toast.success(response?.data?.message);
                        router.push(`/finalReservation/${tourId}`);

                  },
                  onError: (error) => {
                        toast.error("مشکلی پیش آمده است مجدد تلاش کنید.");
                  },
            });



      }
      return (
            <Button label="رزرو و خرید" status="reservation" onClick={() => tourReservationHandler(tourId)} />
      )
}

export default TourReservationActionButton