'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const browseSpace = () => {

  const [spaceList, setSpaceList] = useState([]);

  const fetchSpaces = () => {
    fetch('http://localhost:5000/space/getall')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSpaceList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchSpaces();
  }, [])

  const displaySpaces = () => {
    return spaceList.map(space => (
      <div className="max-w-xs ml-3 mb-4 cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
        <img
          className="w-full rounded-lg object-cover object-center h-56"
          src={'http://localhost:5000/' + space.image}
          alt="product"
        />
        <div>
          <div className="my-6 flex items-center justify-between px-4">
            <p className="font-bold text-gray-500">Space Detail</p>

          </div>
          <div className="my-4 flex items-center justify-between px-4">
            <p className="text-sm font-semibold text-gray-500">Name</p>
            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
              {space.name}
            </p>
          </div>
          <div className="my-4 flex items-center justify-between px-4">
            <p className="text-sm font-semibold text-gray-500">Address</p>
            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
              {space.address}
            </p>
          </div>
          <div className="my-4 flex items-center justify-between px-4">
            <p className="text-sm font-semibold text-gray-500">Area</p>
            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
              {space.area}
            </p>
          </div>

          <div className="my-4 flex items-center justify-between px-4">
            <p className="text-sm font-semibold text-gray-500">price</p>
            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
              {space.price}
            </p>
          </div>
          <div className="my-4 flex items-center justify-between px-4">
            <p className="text-sm font-semibold text-gray-500">Date</p>
            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
              {new Date(space.date).toLocaleDateString()}
            </p>
          </div>

          <Link href={'/space-details/' + space._id} className='ml-4 border px-2 rounded-md py-2 bg-gray-300 text-black font-bold'>View Details</Link>

          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-4 py-2">
              <h2 className="text-xl font-semibold text-gray-800">Features</h2>
            </div >
            <div>
              <select className="block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                {space.selectedFeatures.map((feature, index) => (
                  <option key={index} value={feature}>
                    {feature}
                  </option>
                ))}
              </select></div>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div>
      <h1 className="text-3xl text-black font-bold text-center mt-8 mb-4">Browse<span className='text-blue-700'>Space</span></h1>
      <div>
        <div className="flex min-h-screen items-center justify-center">
          <div className="grid grid-cols-3 px-5">
            {displaySpaces()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default browseSpace;
