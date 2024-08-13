"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import hero from "../public/login-hero.svg";
import google from "../public/google.svg";
import "../app/globals.css"; // Import the CSS file
import Home from "@/components/Home";
import Feed from "@/components/Feed";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import Right from "@/components/Right";
const HomePage = () => {
  return (
    <main className="flex">
      <SideBar />
      <Feed />
      <Right />
    </main>
  );
};

export default HomePage;
