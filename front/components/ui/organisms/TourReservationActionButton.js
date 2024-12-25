"use client"
import { useUpdateUserTour } from '@/core/services/mutations';
import React from 'react'
import toast from 'react-hot-toast';
import Button from '../atoms/Button';

function TourReservationActionButton({ tourId }) {
      const { mutate, isPending } = useUpdateUserTour();


      const tourReservationHandler = (tourId) => {
            if (isPending) return; // Prevent submission if pending
            mutate(tourId, {
                  onSuccess: (response) => {
                        toast.success(response?.data?.message);
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