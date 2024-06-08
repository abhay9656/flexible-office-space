"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const manageSpace = () => {
  //  { name: 'Space 1', address: 'Address 1', area: 100, price: 500, date: '2022-01-01' },
  // { name: 'Space 2', address: 'Address 2', area: 200, price: 1000, date: '2022-02-01' },
  const [order, setOrder] = useState([]);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  )

  const fetchSpaces = () => {
    fetch('http://localhost:5500/booking/getbyuser/'+currentUser._id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setOrder(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  useEffect(() => {
    fetchSpaces();
  }, [])
  return (
    <div className="text-black ">
      <h1 className="text-3xl mt-5 font-bold text-center mb-6">
        Your<span className="text-blue-700">Order</span>
      </h1>
      <table className="mt-16 w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Area</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2" >Features</th>
          </tr>
        </thead>
        <tbody>
          {order.map((obj, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : ''}>
              <td className=" px-4 py-2 flex justify-center text-center ">
                <img
                  className="w-20 h-20 rounded-lg object-cover object-center "
                  src={'http://localhost:5500/' + obj.space.image}
                  alt="product"
                />
              </td>
              <td className=" px-4 py-2 text-center">{obj.space.name}</td>
              <td className=" px-4 py-2 text-center">{obj.space.address}</td>
              <td className=" px-4 py-2 text-center">{obj.space.area}</td>
              <td className=" px-4 py-2 text-center">{obj.space.price}</td>
              <td className=" px-4 py-2 text-center">{new Date(obj.date).toLocaleDateString()}</td>
              <td className=" px-4 py-2 text-center ">{obj.space.selectedFeatures.map(feature => (
                <p className=" px-2 py-1 rounded-lg mr-2">{feature}</p>
              ))} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default manageSpace;
