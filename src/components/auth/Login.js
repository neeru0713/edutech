import { React, useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const inputChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    if (name === "email") {
      setEmail(value);
      setEmailError(validateEmail(value) ? "" : "Invalid email address");
    }
    if (name === "password") {
      setPassword(value);
      setPasswordError(validatePassword(value) ? "" : "Password is reqiured");
    }
  };

  return (
    <div className="flex flex-col p-[6%] gap-8 bg-[#f8fafb] cursor-pointer">
      <h1 className="font-semibold text-3xl">
        edutech
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 text-4xl">
          +
        </span>
      </h1>
      <form className="flex flex-col mx-[43rem] gap-4">
        <label className="text-sm text-[#77808e] text-left">
          Email address
        </label>
        <div className="flex relative items-center">
          <div className="absolute text-[#77808e] m-2">
            <MdOutlineMailOutline />
          </div>
          <input
            type="email"
            placeholder="your@gmail.address"
            name="email"
            onChange={inputChangeHandler}
            value={email}
            className="w-[20rem] px-8 py-2 border rounded-lg text-sm"
          />
        </div>
        {emailError && (
          <span className="text-red-500 flex items-center w-[20rem] gap-2 text-sm">
            <BiErrorCircle /> <p>{emailError}</p>
          </span>
        )}
        <label className="text-sm text-[#77808e] text-left">Password</label>
        <div className="flex relative items-center">
          <div className="absolute text-[#77808e] m-2">
            <IoLockClosedOutline />
          </div>

          <input
            type="password"
            placeholder="Your secret paasword"
            name="password"
            onChange={inputChangeHandler}
            value={password}
            className="w-[20rem] px-8 py-2 border rounded-lg text-sm"
          />
        </div>
        {passwordError && (
          <span className="text-red-500 flex items-center  w-[20rem] gap-2 text-sm">
            <BiErrorCircle /> <p>{passwordError}</p>
          </span>
        )}
        <Link to="/">
          <button className="border rounded-md px-4 py-2 font-semibold bg-[#5845ee] text-white hover:bg-[#382ca5] w-[20rem]">
            Login to landingpage
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
