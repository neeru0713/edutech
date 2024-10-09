import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav w-[100%]">
      <ul className="mx-[16%] pt-8 flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex flex-col md:flex-row text-left text-lg text-gray-800 gap-6 items-center min-w-[96%]">
          <li className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 text-2xl md:pr-10 font-bold">
            Edutech+
          </li>

          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Contact sections</li>
        </div>
        <div className="btn flex flex-col md:flex-row text-left items-center gap-5 w-[30%] md:w-full">
        <Link to="/login" className="cursor-pointer">
          <button className="border rounded-md px-4 py-2 font-semibold hover:bg-[#f7f7fc] w-[5rem]">
            Log in
          </button>
          </Link>
          <button className="border rounded-md px-4 py-2 font-semibold bg-[#5845ee] text-white hover:bg-[#382ca5] w-[rem]">
            Register
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
