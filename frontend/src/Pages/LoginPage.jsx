import React from "react";
import LoginForm from "../Components/LoginForm";
import mainLogo from "../assets/mainlogo.jpeg";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Wrapper to center the form and image */}
      <div className="flex flex-1 items-center justify-center">
        {/* Form section with fade-in animation */}
        <div className="w-1/2 flex justify-center ">
          <LoginForm />
        </div>

        {/* Image section with fade-in and scaling animation */}
        <div className="w-1/2 flex justify-center animate-fadeInRight">
          <img
            src={mainLogo}
            alt="Logo"
            height={400}
            width={400}
            className="rounded-full transform scale-100 hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
