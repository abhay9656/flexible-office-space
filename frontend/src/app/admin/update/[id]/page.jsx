'use client';
import { Formik } from "formik";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Update = () => {
  const { id } = useParams();
  const [updatespace, setUpdateSpace] = useState(null);
  const [image, setImage] = useState("");
  const router = useRouter();

  const fetchspace = async () => {
    const res = await fetch("http://localhost:5000/space/getbyid/" + id);
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setUpdateSpace(data);
  };

  useEffect(() => {
    fetchspace();
  }, []);

  const submitForm = async (values) => {
    values.image = image.name;
    const res = await fetch("http://localhost:5000/space/update/" + id, {
      method: "PUT",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.status);
    if (res.status === 200) {
      toast.success("Space Updated Successfully");
      router.push("/admin/manageSpace");
    } else {
      toast.error("Space Update failed");
    }
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        toast.success("File Uploaded");
        // book.setFieldValue("image", file.name);
      }
    });
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
                  Update<span className="text-blue-700">Space</span>
                </h1>
                <div className="w-full flex-1 mt-8">
                  {updatespace !== null ? (
                    <Formik initialValues={updatespace} onSubmit={submitForm}>
                      {(updatespace) => {
                        return (
                          <form onSubmit={updatespace.handleSubmit}>
                            <div className="mx-auto max-w-xs">
                              <input
                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                type="text"
                                placeholder="Name of the place"
                                id="name"
                                onChange={updatespace.handleChange}
                                value={updatespace.values.name}
                              />
                              <input
                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                type="text"
                                placeholder="Address"
                                id="address"
                                onChange={updatespace.handleChange}
                                value={updatespace.values.address}
                              />
                              <input
                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                type="text"
                                placeholder="Area"
                                id="area"
                                onChange={updatespace.handleChange}
                                value={updatespace.values.area}
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
                                onChange={updatespace.handleChange}
                                value={updatespace.values.price}
                              />
                              <input
                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                type="date"
                                placeholder="Date"
                                id="date"
                                onChange={updatespace.handleChange}
                                value={updatespace.values.date}
                              />
                              {/* <label htmlFor="" className="mb-2 text-xl">
                                Features:
                              </label>
                              {features.map((feature, index) => (
                                <div key={index} className="mt-2">
                                  <input
                                    style={{ color: "white" }}
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
                              ))} */}
                              <button
                                type="submit"
                                className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                              >
                                Update Space
                              </button>
                            </div>
                          </form>
                        );
                      }}
                    </Formik>
                  ) : (
                    <div className="text-center">
                      <h1>Loading...</h1>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
              <div
                className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    'url("/update.png")',
                }}
              ></div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Update;
