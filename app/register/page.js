"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import google from "../../public/google.svg";
//import "../../../../app/globals.css"; // Import the CSS file
import { signup } from "../api/api";
const RegisterPage = ({ params }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signup({ email, password });
      console.log("Signup successful!");
    } catch (error) {
      setMessage(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-16 px-8 bg-gray-100">
      <h1 className="pb-8 text-5xl text-[#2977c9] font-light">
        Créer un compte
      </h1>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="h-12 bg-blue-600 text-white rounded-md shadow-md transition duration-200 hover:bg-blue-700"
          >
            Créer un compte
          </button>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-500">ou</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <button
            type="button"
            className="flex items-center justify-center h-12 w-full bg-white rounded-md shadow-md transition duration-200 border border-gray-300 hover:bg-gray-100"
          >
            <Image src={google} alt="Google logo" width={24} height={24} />
            <span className="ml-2 text-gray-700">Continuer avec Google</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
