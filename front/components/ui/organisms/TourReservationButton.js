"use client"

import { useAddTourToBasket } from '@/core/services/mutations';
import toast from 'react-hot-toast';
import Button from '../atoms/Button';
import { useRouter } from 'next/navigation';
import { getCookie } from '@/core/utils/cookie';

function TourReservationButton({ tourId }) {
      const router = useRouter()
      const { mutate, isPending } = useAddTourToBasket();//mutate

      // check there is access token or not
      const reservationHandler = (tourId) => {
            const accessToken = getCookie('accessToken');
            // if there is no access token
            if (!accessToken) {
                  toast.error("لطفا ابتدا وارد حساب کاربری خود شوید."); // Notify user to log in
                  return;
            }
            // Prevent submission if pending
            if (isPending) return;

            // Add tour to basket
            mutate(tourId, {
                  onSuccess: (response) => {
                        toast.success(response?.data?.message);
                        router.push('/checkout');
                  },
                  onError: (error) => {
                        toast.error("مشکلی پیش آمده است مجدد تلاش کنید.");
                  },
            });



      }
      return (
            <Button label=" رزرو و خرید تور" status="reservation" onClick={() => reservationHandler(tourId)} />
      )
}

export default TourReservationButton