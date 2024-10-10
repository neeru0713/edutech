import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import MyCourses from "./MyCourses";
import Analytics from "./Analytics";
import Account from "./Account";

const Dashboard = ({ user }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("courses");

  return (
    <div className="dashboard-container flex">
      <Sidebar setSelectedMenuItem={setSelectedMenuItem} />
      <div className="content-container flex-1 p-10">
        <h1 className="pb-5 text-blue-600 text-3xl font-bold">
          Welcome, {user?.name}!
        </h1>

        {selectedMenuItem === "courses" && <MyCourses />}
        {selectedMenuItem === "analytics" && <Analytics />}
        {selectedMenuItem === "account" && <Account user={user} />}
      </div>
    </div>
  );
};

export default Dashboard;
