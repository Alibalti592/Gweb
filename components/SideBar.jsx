"use client";
import React from "react";

const SideBar = () => {
  return (
    <div className="right-sidebar bg-gray-100 p-4 w-80 h-full">
      <div className="profile-card bg-white p-4 rounded-lg shadow-md mb-4">
        <img src="/images/user.svg"></img>
        <h2 className="text-lg font-semibold my-2">Ahmed Wezdar</h2>
        <p className="text-sm mb-1">Etudiant</p>
        <p className="text-sm">GLSI</p>
      </div>
    </div>
  );
};

export default SideBar;
