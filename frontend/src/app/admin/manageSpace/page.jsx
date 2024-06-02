"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const manageSpace = () => {
  //  { name: 'Space 1', address: 'Address 1', area: 100, price: 500, date: '2022-01-01' },
  // { name: 'Space 2', address: 'Address 2', area: 200, price: 1000, date: '2022-02-01' },
  const [spaceDetail, setSpaceDetail] = useState([]);

  const deleteSpace = (id) => {
    fetch('http://localhost:5500/space/delete/' + id, {
      method: 'DELETE',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        fetchSpaces();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const fetchSpaces = () => {
    fetch('http://localhost:5500/space/getall')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSpaceDetail(data);
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
        Manage<span className="text-blue-700">Space</span>
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
            <th className="px-4 py-2" colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {spaceDetail.map((space, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : ''}>
              <td className=" px-4 py-2 flex justify-center text-center ">
                <img
                  className="w-20 h-20 rounded-lg object-cover object-center "
                  src={'http://localhost:5000/' + space.image}
                  alt="product"
                />
              </td>
              <td className=" px-4 py-2 text-center">{space.name}</td>
              <td className=" px-4 py-2 text-center">{space.address}</td>
              <td className=" px-4 py-2 text-center">{space.area}</td>
              <td className=" px-4 py-2 text-center">{space.price}</td>
              <td className=" px-4 py-2 text-center">{new Date(space.date).toLocaleDateString()}</td>
              <td className=" ">
                <button className="text-red-700  font-bold" onClick={() => deleteSpace(space._id)}>Delete</button>
              </td>
              <td className="">
                <Link href={`/admin/update/${space._id}`} className="font-bold text-blue-700">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default manageSpace;
