"use client"


import { useGetUserData } from '@/core/services/queries'


import UserBankAccountForm from "@/components/templates/userBankAccountForm";
import UserAccountInfoForm from '@/components/templates/userAccountInfoForm'
import UserPersonalInfoForm from '@/components/templates/userPersonalInfoForm'




function Profile() {

  // Get user data
  const { data, isError, error, isLoading } = useGetUserData()

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;


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