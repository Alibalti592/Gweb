"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import hero from "../public/login-hero.svg";
import google from "../public/google.svg";
import "../app/globals.css"; // Import the CSS file

const Home = () => {
  return (
    <>
      <section className="flex flex-col mx-auto items-center justify-center min-h-screen py-16 px-8">
        <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center justify-center md:justify-start gap-20">
          <div className="mt-8 md:mt-0 md:w-2/3">
            <h1 className="pb-8 text-5xl  text-[#2977c9] font-light">
              Bienvenue dans votre communauté éducative
            </h1>
            <button className="flex justify-center items-center h-14 w-full bg-white rounded-[28px] shadow-md transition duration-200 text-lg text-black text-opacity-60 hover:bg-[rgba(207,207,207,0.25)] hover:text-opacity-75">
              <Image src={google} alt="Google logo" width={24} height={24} />
              <span className="ml-2">Connexion avec Google</span>
            </button>
          </div>
          <div className="md:ml-8 mt-8 md:mt-0">
            <Image
              src={hero}
              alt="Illustration éducative"
              className="w-full md:w-[700px]"
              width={700}
              height={670}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
