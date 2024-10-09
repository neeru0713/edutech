import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import MyCourses from "./MyCourses";
import Analytics from "./Analytics";
import Account from "./Account";

const Dashboard = ({ user }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState();

  return (
    <div className="dashboard-container flex">
      <Sidebar setSelectedMenuItem={setSelectedMenuItem} />
      <div className="content-container flex-1 p-10">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-600 text-2xl font-bold">
          Welcome, {user?.name}!
        </h1>
        {selectedMenuItem === 'courses' && <MyCourses />}
        {selectedMenuItem === 'analytics' && <Analytics />}
        {selectedMenuItem === 'account' && <Account />}
      </div>
    </div>
  );
};

export default Dashboard;
