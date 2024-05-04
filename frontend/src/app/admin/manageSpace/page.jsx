"use client";
import React from "react";

const manageSpace = () => {
  return (
    <div className="text-black">
        <h1 className="text-3xl font-normal text-center mb-6">Manage Space</h1> 
    <div className="flex justify-center">
      <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="object-cover object-center w-full h-56"
          src="/space1.jpeg"
          alt="avatar"
        />

        <div className="text-black flex flex-col px-6 py-4">
          <label htmlFor="">Name:</label>
          <label htmlFor="">Address:</label>
          <label htmlFor="">Area:</label>
          <label htmlFor="">Price:</label>
          <label htmlFor="">Date:</label>
        </div>
      </div>
    </div>
    </div>
  );
};

export default manageSpace;
