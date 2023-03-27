import React from "react";
import "../../styles/header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('JWT');
    navigate('/');
  }

  return (
    <div className="header-div">
      <div className="header-item active-header-item">To Do</div>
      <div className="header-item" onClick={handleLogout}>Logout</div>
    </div>
  );
};

export default Header;