import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaLock, FaKey } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { NavLink } from "react-router-dom";

const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-[#F5F5F5] p-6 rounded-lg w-full max-w-xl mx-auto space-y-6"
    >
      <div className="text-left mb-6">
        <h1 className="text-3xl font-bold text-black text-center">REGISTER</h1>
      </div>

      <div className="flex flex-col space-y-2">
        <label
          htmlFor="name"
          className="block text-lg text-black font-semibold flex items-center"
        >
          <IoPersonSharp className="mr-2" />
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          placeholder="Enter Name"
          onChange={changeHandler}
          className="p-3 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label
          htmlFor="email"
          className="block text-lg text-black font-semibold flex items-center"
        >
          <IoIosMail className="mr-2" />
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          placeholder="Enter Email"
          onChange={changeHandler}
          className="p-3 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label
          htmlFor="password"
          className="block text-lg text-black font-semibold flex items-center"
        >
          <FaLock className="mr-2" />
          Password
        </label>
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            id="password"
            value={formData.password}
            placeholder="••••••••"
            onChange={changeHandler}
            className="p-3 rounded-md bg-white text-black border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {showPass ? (
            <FaEyeSlash
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowPass((prev) => !prev)}
            />
          ) : (
            <FaEye
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowPass((prev) => !prev)}
            />
          )}
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label
          htmlFor="confirmPassword"
          className="block text-lg text-black font-semibold flex items-center"
        >
          <FaKey className="mr-2" />
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={showConfirmPass ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            placeholder="••••••••"
            onChange={changeHandler}
            className="p-3 rounded-md bg-white text-black border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {showConfirmPass ? (
            <FaEyeSlash
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowConfirmPass((prev) => !prev)}
            />
          ) : (
            <FaEye
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowConfirmPass((prev) => !prev)}
            />
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="terms"
          className="h-4 w-4 text-blue-600 bg-gray-700 border border-gray-600 rounded"
        />
        <label htmlFor="terms" className="text-black text-sm">
          I agree to all statements in the Terms of Service
        </label>
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Register
        </button>
        <p className="text-center text-black">
          Already Have an Account?{" "}
          <NavLink to="/login">
            <span className="text-blue-600">Log In</span>
          </NavLink>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
