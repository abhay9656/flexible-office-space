'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ManageBooking = () => {
  const [bookingList, setBookingList] = useState([]);

  const fetchSpaces = async () => {
    try {
      const response = await fetch('http://localhost:5000/booking/getall');
      const data = await response.json();
      setBookingList(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSpaces();
  }, []);

  const displayBooking = () => {
    return bookingList.map((book) => (
      <tr key={book.id}>
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {book.spaceId}
        </th>
        <td className="px-6 py-4">{book.bookingNo}</td>
        <td className="px-6 py-4">{book.date}</td>
        <td className="px-6 py-4">{book.time}</td>
        <td className="px-6 py-4">{book.duration}</td>
        <td className="flex px-6 py-4">
          <button
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
          >
            Edit
          </button>
          <button
            className="font-medium text-red-600 dark:text-red-500 hover:underline"   
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <h1 className="text-3xl text-black font-bold text-center mt-8 mb-4">
        Manage<span className="text-blue-700">Booking</span>
      </h1>
      <div>
        <div className="flex min-h-screen items-center justify-center">
          <div className=" flex grid-cols-3 ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Space ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Booking No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Time
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Duration
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action 
                  </th>
                </tr>
              </thead>
              <tbody>{displayBooking()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBooking;