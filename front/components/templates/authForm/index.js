"use client";

import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import ModalContainer from "@/components/partial/container/ModalContainer";
import Link from "next/link";

function AuthForm() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");//lifting state up
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseForm = () => {
    setIsOpen(false)
  }

  const handleGoBack = () => {
    setStep(1)
  }
  return (
    <>

      {/* <span className='px-2 text-primary'>|</span>
        <Link href="/" className='text-primary'>ثبت نام</Link> */}

{/* conditionally render */}

      {/* Desktop login button */}
      <div className="hidden md:flex border border-solid border-primary px-5 rounded-xl">

        <button onClick={() => setIsOpen(true)} className='text-primary flex items-center'>
          <img src="/icons/user.svg" className='w-[24px]' />
          <span>ورود</span>
        </button>
      </div>

      {/* Mobile login button */}
      <button onClick={() => setIsOpen(true)} className='md:hidden text-primary flex items-center'>
        <img src="/icons/signInBtn.png" className='w-[30px] rounded-2.5' />
      </button>


      {step === 1 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <SendOTPForm
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
            onClose={handleCloseForm}
          />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <CheckOTPForm
            mobile={mobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
            onGoBack={handleGoBack}
          />
        </ModalContainer>
      )}


    </>
  )

}

export default AuthForm;
