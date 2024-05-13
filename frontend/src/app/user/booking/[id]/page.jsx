"use client";
import { useFormik } from "formik";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Booking = () => {
  const { id } = useParams();

  const [book, setbooking] = useState(null);
  const router = useRouter();

  const fetchbook = () => {
    fetch("http://localhost:5000/space/getbyid/" + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setbooking(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchbook();
  }, []);

  const booking = useFormik({
    initialValues: {
      date: "",
      time: "",
      duration: "",
      space: id,
    },
    onSubmit: (values,{resetForm}) => {
      console.log(values);
      sessionStorage.setItem("bookingDetails", JSON.stringify(values));
      sessionStorage.setItem("spaceDetails", JSON.stringify(book));

      router.push('/user/checkout/' + book._id);
      return;
      fetch("http://localhost:5000/booking/addBooking", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success("Booking Successfully");
            resetForm();
          } else {
            toast.error("Booking  failed");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Booking  failed");
        });
    },
  });

  return book !== null ? (
    <div>
      <>
        {/* component */}
        <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row items-start">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-6">
              <img
                src="/space.png"
                alt="Image Placeholder"
                className="w-full rounded-md"
              />
            </div>
            <form onSubmit={booking.handleSubmit}>
              <h1 className="text-center text-black text-3xl font-bold">Boo<span className="text-blue-700">king</span></h1>
              <div className="flex font-sans   h-80   my-5 mr-3">
                <div className="flex-none  w-72 relative">
                  <img
                    src={`http://localhost:5000/${book.image}`}
                    alt=""
                    className="absolute inset-0 rounded-tl-lg w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex-auto p-3 mt-0 ml-12  text-black">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <label
                            htmlFor="name"
                            className="block font-semibold mb-1"
                          >
                            Name:
                          </label>
                        </td>
                        <td>
                          <label
                            type="text"
                            placeholder="Name of the place"
                            id="name"
                            onChange={booking.handleChange}
                            value={booking.values.name}
                          >
                            {book.name}
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label
                            htmlFor="area"
                            className="block font-semibold mb-1"
                          >
                            Area:
                          </label>
                        </td>
                        <td>
                          <label
                            type="text"
                            placeholder="Area"
                            id="area"
                            onChange={booking.handleChange}
                            value={booking.values.area}
                          >
                            {book.area}
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label
                            htmlFor="address"
                            className="block font-semibold mb-1"
                          >
                            Address:
                          </label>
                        </td>
                        <td>
                          <label
                            type="text"
                            placeholder="Address"
                            id="address"
                            onChange={booking.handleChange}
                            value={booking.values.address}
                          >
                            {book.address}
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label
                            htmlFor="price"
                            className="block font-semibold mb-1"
                          >
                            Price:
                          </label>
                        </td>
                        <td>
                          <label>{book.price}</label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <h1 className=" font-bold">Features</h1>
                    <ul className="my-2 mx-4 list-disc" id="selectedFeatures">
                      <li>{book.selectedFeatures[0]}</li>
                      <li>{book.selectedFeatures[1]}</li>
                      <li>{book.selectedFeatures[2]}</li>
                      <li>{book.selectedFeatures[3]}</li>
                      <li>{book.selectedFeatures[4]}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="date"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      onChange={booking.handleChange}
                      value={booking.values.date}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="time"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      id="time"
                      onChange={booking.handleChange}
                      value={booking.values.time}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="time"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Duration
                    </label>
                    <input
                      type="text"
                      id="duration"
                      onChange={booking.handleChange}
                      value={booking.values.duration}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Checkout
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default Booking;
