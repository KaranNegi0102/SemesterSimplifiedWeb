import React from "react";
import RegisterForm from "../Components/RegisterForm";
import mainLogo from "../assets/mainlogo.jpeg";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200 overflow-hidden">
      {/* Content Container */}
      <div className="flex flex-1 items-center justify-center">
        {/* Registration Form Section */}
        <div className="w-full sm:w-3/4 md:w-1/2 flex justify-center px-4 sm:px-6 md:px-12">
          <RegisterForm />
        </div>

        {/* Logo Section */}
        <div className="hidden md:flex w-1/2 justify-center animate-fadeInRight">
          <img
            src={mainLogo}
            alt="Main Application Logo"
            height={350}
            width={350}
            className="rounded-full transform scale-95 hover:scale-105 transition-transform duration-500 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
