import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({setSelectedMenuItem}) => {

  return (
    <nav className="sidebar w-64 bg-[#f8f7fe] p-8 h-screen flex flex-col gap-10">
      <Link to="/">
        {" "}
        <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600  md:pr-10 font-bold">
          Edutech+
        </h1>
      </Link>
      <ul>
        <li onClick={() => {setSelectedMenuItem("courses")}} className="py-2 hover:bg-gray-200">
         My Courses
        </li>
        <li onClick={() => {setSelectedMenuItem("analytics")}} className="py-2 hover:bg-gray-200">
          Analytics
        </li>
        <li onClick={() => {setSelectedMenuItem("account")}} className="py-2 hover:bg-gray-200">
          Account Settings
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
