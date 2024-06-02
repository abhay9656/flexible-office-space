"use client";

import { useFormik } from "formik";
import toast from "react-hot-toast";
import React, {  useState } from 'react'

const space = () => {
  const [features, setFeatures] = useState([
    { name: "Support staff", key: "supportStaff" },
    { name: "Cafeteria", key: "cafeteria" },
    { name: "Chill out space", key: "chillOutSpace" },
    { name: "High speed internet", key: "highSpeedInternet" },
    { name: "Dedicated Lockers", key: "dedicatedLockers" },
    { name: "Fully Furnished Office Space", key: "fullyFurnishedOfficeSpace" },
  ]);

  const book = useFormik({
    initialValues: {
      name: "",
      address: "",
      area: "",
      image: "",
      price: "",
      date: "",
      selectedFeatures: []
    },
    onSubmit: (values,{resetForm}) => {
      console.log(values);
      fetch("http://localhost:5500/space/addSpace", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success("Space Added Successfully");
            resetForm()
          } else {
            toast.error("Space Added failed");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("space Added failed");
        });
    },
  });

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        toast.success("File Uploaded");
        book.setFieldValue("image", file.name);
      }
    });
  };

  const handleFeatureChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      book.setFieldValue("selectedFeatures", [
        ...book.values.selectedFeatures,
        value,
      ]);
    } else {
      book.setFieldValue(
        "selectedFeatures",
        book.values.selectedFeatures.filter((feature) => feature !== value)
      );
    }
  };

  return (
    <div>
      <>
        {/* source:https://codepen.io/owaiswiz/pen/jOPvEPB */}
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
          <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
              <div className="mt-12 flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-extrabold">
                  Add<span className="text-blue-700">Space</span>
                </h1>
                <div className="w-full flex-1 mt-8">
                  {/* <div className="my-12 border-b text-center">
              <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                Or sign up with e-mail
              </div>
            </div> */}
                  <form onSubmit={book.handleSubmit}>
                    <div className="mx-auto max-w-xs">
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text"
                        placeholder="Name of the place"
                        id="name"
                        onChange={book.handleChange}
                        value={book.values.name}
                      />
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="text"
                        placeholder="Address"
                        id="address"
                        onChange={book.handleChange}
                        value={book.values.address}
                      />
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="text"
                        placeholder="Area"
                        id="area"
                        onChange={book.handleChange}
                        value={book.values.area}
                      />

                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="file"
                        placeholder="Image"
                        onChange={uploadFile}
                      />
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="text"
                        placeholder="Price"
                        id="price"
                        onChange={book.handleChange}
                        value={book.values.price}
                      />
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="date"
                        placeholder="Date"
                        id="date"
                        onChange={book.handleChange}
                        value={book.values.date}
                      />
                      <label htmlFor="" className="mb-2 text-xl">Features:</label>
                      {features.map((feature, index) => (
                        <div key={index} className="mt-2">
                          <input
                          style={{color:'white'}}
                            type="checkbox"
                            id={feature.key}
                            name={feature.key}
                            value={feature.name}
                            onChange={handleFeatureChange}
                          />
                          <label htmlFor={feature.key} className="ml-2">
                            {feature.name}
                          </label>
                        </div>
                      ))}
                      <button
                        type="submit"
                        className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      >
                        Add Space
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
              <div
                className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")',
                }}
              ></div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default space;
