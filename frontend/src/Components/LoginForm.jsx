import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const navigate = useNavigate();

  const changeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/user/login",
        {
          email: formData.email,
          password: formData.password,
          rememberMe: formData.rememberMe,
        },
        { withCredentials: true }
      );

      if (res.data.status === "ok") {
        toast.success("Login Successful");
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-gray-100 p-6 rounded-lg w-full max-w-md mx-auto shadow-md"
    >
      <div className="text-left mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Login</h1>
        <p className="mt-2 text-gray-600">
          Don’t have an account?{" "}
          <NavLink to="/register" className="text-blue-600 font-medium">
            Sign up
          </NavLink>
          .
        </p>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-lg text-gray-700 font-medium">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          placeholder="name@company.com"
          onChange={changeHandler}
          className="w-full p-2 mt-1 border rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-lg text-gray-700 font-medium">
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
            className="w-full p-2 mt-1 border rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <span
            onClick={() => setShowPass((prev) => !prev)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>

      <div className="mb-4">
        <label className="flex items-center text-gray-700">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={changeHandler}
            className="mr-2"
          />
          Remember me
        </label>
      </div>

      <button
        type="submit"
        className="w-full p-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
