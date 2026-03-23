import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toastSuccess } from "../utils/toastSuccess";
import { useAuth } from "../context/AuthContext";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  
  // const {token,role,logoutAuth} = useAuth();

  const token = useAuthStore((state) => state.token)
  const role = useAuthStore((state) => state.role)
  const logout = useAuthStore((state)=> state.logout)


  const handleLogout = () => {
   logout()
    toastSuccess("Logout-Success");
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow cursor-pointer "
          >
            <li className="my-1 hover:text-primary">
              <Link to="/">Home</Link>
            </li>
            <li className="my-1 hover:text-primary">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="my-1 hover:text-primary">
              <Link to="/about">About</Link>
            </li>
            <li className="my-1 hover:text-primary">
              <Link to="/login">Login</Link>
            </li>
            <li className="my-1 hover:text-primary">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">React Authentication </a>
      </div>
      <div className="navbar-end">
        {role && (
          <button
            className={` btn ${role == "admin" ? "btn-primary" : "btn-success"}`}
          >
            {" "}
            {role}
          </button>
        )}

        {token && (
          <button
            onClick={handleLogout}
            className="btn btn-ghost btn-circle text-xl h-10 w-10 -mt-1 cursor-pointer text-red-700"
            title="logout"
          >
            ⏻
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
