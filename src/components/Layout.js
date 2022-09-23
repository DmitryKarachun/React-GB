import React from "react";
import { Link, Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/chat">Chat</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
