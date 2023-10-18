import React, { useState, useEffect } from "react";
import "./DashboardNavbar.css";
import ProfileDropdown from "../components/Profile-DropDown/ProfileDropdown";
import MirakiLogo from './../images/logos/logo-light.png'

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentTime]);

  return (
    <div className="navbarDashboard">
      <div className="left-section">
        <div className="logo">
          <img src={MirakiLogo} alt="Logo" style={{ height: '4rem' }} />
        </div>
        <div className="dashboard-title">CRM Dashboard</div>
      </div>
      <div className="right-section">
        <div className="date-time">
          {currentTime.toLocaleDateString()} -{" "}
          {currentTime.toLocaleTimeString()} | Rama
        </div>
        <div className="profile-icon">
          {/* <img src="profile-icon.png" alt="Profile" /> */}
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
