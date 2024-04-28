"use client";
import React from 'react'
import { useFormik } from "formik";

const booking = () => {

    const book=useFormik({
        initialValues:{
            area:'',
            duration:'',
            bookingDate:'',
            price:''
        },
        onSubmit:(values)=>{
            console.log(values);
            fetch('http://localhost:5000/space/addSpace',{
                method:'POST',
                body:JSON.stringify(values),
                headers:{
                  'content-Type':'application/json'
                }
              })
              .then((response) => {
                console.log(response.status);
              }).catch((err) => {
                console.log(err);
              });
        }
    })

  return (
    <div>
      <div className="container mx-auto px-4">
      <h1 className="text-2xl text-center font-bold mb-4">Booking Page</h1>
      <form onSubmit={book.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="area" className="block text-sm font-medium text-gray-700">
            Area
          </label>
          <input
            type="text"
            id="area"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            onChange={book.handleChange}
            value={book.values.area}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
            Duration
          </label>
          <input
            type="text"
            id="duration"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            onChange={book.handleChange}
            value={book.values.duration}
            
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bookingDate" className="block text-sm font-medium text-gray-700">
            Booking Date
          </label>
          <input
            type="date"
            id="bookingDate"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            onChange={book.handleChange}
            value={book.values.bookingDate}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="text"
            id="price"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            onChange={book.handleChange}
            value={book.values.price}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Book Now
        </button>
      </form>
    </div>
    </div>
  )
}

export default booking
