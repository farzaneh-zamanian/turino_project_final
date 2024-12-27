"use client";
import { useState } from "react";

import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import ModalContainer from "@/components/partial/container/ModalContainer";
import UserLogin from "@/public/icons/icons/UserLogin";
import SignInBtn from "@/public/icons/icons/SignInBtn";

function AuthForm() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");//lifting state up
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseForm = () => setIsOpen(false)
  const handleGoBack = () => setStep(1)
  const openModal = () => setIsOpen(true);

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
            onClose={handleCloseForm}
          />
        );
        case 2:
        return (
          <CheckOTPForm
            mobile={mobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
            onGoBack={handleGoBack}
          />
        );
      default:
        return null;
    }
  };



  return (
    <>
      {/* Desktop login button */}
      <div className="hidden md:flex border border-solid border-primary px-5 rounded-xl">
        <button onClick={openModal} className='text-primary flex items-center'>
          <UserLogin />
          <span>ورود</span>
        </button>
      </div>

      {/* Mobile login button */}
      <button onClick={openModal} className='md:hidden text-primary flex items-center '>
        <SignInBtn />
      </button>


      <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
        {renderForm()}
      </ModalContainer>



    </>
  )

}

export default AuthForm;
