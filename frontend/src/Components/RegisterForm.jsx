import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaLock, FaKey } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (!formData.terms) {
      toast.error("Please accept the Terms and Conditions.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/v1/user/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (response.data.status === "ok") {
        toast.success("User created successfully!");
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          terms: false,
        });
      } else {
        toast.error("Failed to create user.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during registration.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-3 rounded-lg w-full max-w-sm mx-auto shadow-sm space-y-4"
    >
      {/* Form Header */}
      <div className="text-center mb-4">
        <h1 className="text-xl font-bold text-gray-800">Register</h1>
      </div>

      {/* Name Input */}
      <div className="space-y-1">
        <label htmlFor="name" className="flex items-center text-sm font-semibold text-gray-700">
          <IoPersonSharp className="mr-2 text-lg" />
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          placeholder="Enter your name"
          onChange={handleChange}
          className="p-2 text-sm rounded-md w-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email Input */}
      <div className="space-y-1">
        <label htmlFor="email" className="flex items-center text-sm font-semibold text-gray-700">
          <IoIosMail className="mr-2 text-lg" />
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
          className="p-2 text-sm rounded-md w-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Password Input */}
      <div className="space-y-1">
        <label htmlFor="password" className="flex items-center text-sm font-semibold text-gray-700">
          <FaLock className="mr-2 text-lg" />
          Password
        </label>
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            id="password"
            value={formData.password}
            placeholder="••••••••"
            onChange={handleChange}
            className="p-2 text-sm rounded-md w-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {showPass ? (
            <FaEyeSlash
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowPass(false)}
            />
          ) : (
            <FaEye
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowPass(true)}
            />
          )}
        </div>
      </div>

      {/* Confirm Password Input */}
      <div className="space-y-1">
        <label htmlFor="confirmPassword" className="flex items-center text-sm font-semibold text-gray-700">
          <FaKey className="mr-2 text-lg" />
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={showConfirmPass ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            placeholder="••••••••"
            onChange={handleChange}
            className="p-2 text-sm rounded-md w-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {showConfirmPass ? (
            <FaEyeSlash
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowConfirmPass(false)}
            />
          ) : (
            <FaEye
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowConfirmPass(true)}
            />
          )}
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
        <label htmlFor="terms" className="text-sm text-gray-700">
          I agree to the <span className="text-blue-600 cursor-pointer">Terms of Service</span>.
        </label>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors text-sm"
        >
          Register
        </button>
        <p className="text-center text-gray-700 mt-3 text-sm">
          Already have an account?{" "}
          <NavLink to="/login" className="text-blue-600">
            Log In
          </NavLink>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
