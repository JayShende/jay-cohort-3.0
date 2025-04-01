"use client";
import React from "react";
import animationData from "../asset/google_Loader.json"; // Adjust path
import Lottie from "lottie-react";

const TestApp = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
     <Lottie animationData={animationData} loop autoplay className="w-40" />
    </div>
  );
};

export default TestApp;
