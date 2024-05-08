"use client";
import { useFormik } from "formik";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Booking = () => {
  const { id } = useParams();

  const [book, setbooking] = useState(null);

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
      name: "",
      address: "",
      area: "",
      image: "",
      price: "",
      selectedFeatures: [],
      date: "",
      time: "",
    },
    onSubmit: (values) => {
      console.log(values);
      toast.success("booked");
    },
  });

  return book !== null ? (
    <div>
      <>
        {/* component */}
        <div className="bg-white relative lg:py-20">
          <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
            <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
              <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                  <img src="/space.png" className="btn-" />
                </div>
              </div>
              <div

                className=" mt-20 mr-5 mb-0 ml-0 relative z-10 max-w-3xl lg:mt-0 lg:w-5/12"
              >
                <div style={{width:700}} className="flex mr-5  flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
                  <p className="w-full text-3xl font-bold text-center text-black leading-snug font-sans">
                    Boo<span className="text-blue-700">king</span>
                  </p>
                  <>
                    <form onSubmit={booking.handleSubmit}>
                      <div className="flex font-sans   h-96 border  my-5 mr-3">
                        <div className="flex-none w-96 relative">
                          <img
                            src={`http://localhost:5000/${book.image}`}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                            
                          />
                        </div>

                        <div className="flex-auto p-4 mt-10  text-black">
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
                                  <label
                                  >
                                    {book.price}
                                  </label>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div>
                            <h1 className=" font-bold">Features</h1>
                            <ul className="my-2 list-disc" id="selectedFeatures" >
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
                      </div>
                      <div>
                        <button type="submit" className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                          Book Now
                        </button>
                      </div>
                    </form>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default Booking;
