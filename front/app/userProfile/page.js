"use client"

import { useGetUserData } from '@/core/services/queries'
import UserBankAccountForm from "@/components/templates/userBankAccountForm";
import UserAccountInfoForm from '@/components/templates/userAccountInfoForm'
import UserPersonalInfoForm from '@/components/templates/userPersonalInfoForm'
import toast from 'react-hot-toast';

function Profile() {

  // Get user data
  const { data, isError, error, isLoading } = useGetUserData()
  if (isLoading) return <div>Loading...</div>;
  if (isError) return toast(`مشکلی پیش آمده است${error.message}`);


  return (
    <>
      {/* user account form */}
      <UserAccountInfoForm data={data} />
      {/* user bank account form */}
      <UserBankAccountForm data={data} />
      {/* user prsonal account */}
      <UserPersonalInfoForm data={data} />


    </>

  )
}

export default Profile