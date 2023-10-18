import React from "react";
import DashboardNavbar from "./../../Navbar-Dashboard/DashboardNavbar";
import DashboardBody from "./../../Body-Dashboard/BodyDashboard";

const DashboardCRM = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <DashboardNavbar />
        <DashboardBody />
      </div>
    </>
  );
};

export default DashboardCRM;
