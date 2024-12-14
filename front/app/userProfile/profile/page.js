import Button from '@/components/ui/atoms/Button'
import Headings from '@/components/ui/atoms/Headings'
import Input from '@/components/ui/atoms/Input'
import DualSpan from '@/components/ui/molecules/DualSpan'
import React from 'react'

function Profile() {
  return (
    <div className='flex flex-col gap-[2rem]'>
      <div className='flex flex-col gap-5 border border-borderDivColor rounded-2xl p-[1.5rem]'>
        <Headings label="  اطلاعات حساب کاربری" type="h2" />
        <div className='flex flex-col gap-5 md:flex-row justify-between'>
          <DualSpan title="شماره موبایل" value="09173200197" />
          <div className='flex flex-row items-center justify-between gap-5'>
            <Input placeholder="آدرس ایمیل" title="profileInput" type="email" />
            <Button label="تایید" status="profileBtn" />
          </div>
        </div>

      </div>
      <div className='flex flex-col border border-borderDivColor rounded-2xl p-[1.5rem] gap-[1rem]'>
        <div className='flex flex-col md:grid grid-cols-3 gap-5'>

          <Input placeholder="نام و نام خانوادگی" type="text" title="profilInputFull" />
          <Input placeholder=" کدملی  " type="text" title="profilInputFull" />
          <Input placeholder=" کدملی  " type="text" title="profilInputFull" />
          <Input placeholder=" کدملی  " type="text" title="profilInputFull" />
        </div>
        <div className='flex items-center gap-5 '>
          <Button label="انصراف" status="cancelBtn" />
          <Button label="تایید" status="profileBtn" />
        </div>


      </div>
      <div className='flex flex-col border border-borderDivColor rounded-2xl p-[1.5rem] gap-[1rem]'>
        <div className='flex flex-col md:grid grid-cols-3 gap-5'>
          <Input placeholder=" شماره حساب  " type="number" title="profilInputFull" />
          <Input placeholder=" شماره کارت  " type="number" title="profilInputFull" />
          <Input placeholder=" شماره شبا  " type="number" title="profilInputFull" />
        </div>
        <div className='flex items-center gap-5'>
          <Button label="انصراف" status="cancelBtn" />
          <Button label="تایید" status="profileBtn" />
        </div>
      </div>
    </div>
  )
}

export default Profile