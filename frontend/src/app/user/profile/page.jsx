"use client";
import { useFormik } from "formik";
import React from "react";
import toast from "react-hot-toast";

const profile = () => {
  const userProfile = useFormik({
    initialValues: {
      image: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      phone: "",
      checkbox: "",
      bio: "",
    },
    onSubmit: (values) => {
      console.log(values);
      fetch("http://localhost:5000/profile/addProfile", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success("Profile Register Successfully");
            resetForm();
          } else {
            toast.error("Profile Register Failed");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Profile Register Failed");
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
        userProfile.setFieldValue("image", file.name);
      }
    });
  };

  return (
    <div>
      <>
        {/* Card Section */}
        <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
          {/* Card */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
                Profile
              </h2>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Manage your name, password and account settings.
              </p>
            </div>
            {/* Grid */}
            <form onSubmit={userProfile.handleSubmit}>
              <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                <div className="sm:col-span-3">
                  <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                    Profile photo
                  </label>
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <div className="flex items-center gap-5">
                    <input type="file" onChange={uploadFile} id="image" />
                    <div className="flex gap-x-2">
                      <div>
                        <button
                          type="button"
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                        >
                          <svg
                            className="flex-shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1={12} x2={12} y1={3} y2={15} />
                          </svg>
                          Upload photo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Col */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="af-account-full-name"
                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                  >
                    Full name
                  </label>
                  <div className="hs-tooltip inline-block">
                    <button type="button" className="hs-tooltip-toggle ms-1">
                      <svg
                        className="inline-block size-3 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </button>
                    {/* <span
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                role="tooltip"
              >
                Displayed on public forums, such as Preline
              </span> */}
                  </div>
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <div className="sm:flex">
                    <input
                      id="firstName"
                      onChange={userProfile.handleChange}
                      value={userProfile.values.firstName}
                      type="text"
                      className="py-2 px-3 pe-11 bg-white border-2 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      id="lastName"
                      onChange={userProfile.handleChange}
                      value={userProfile.values.lastName}
                      className="py-2 px-3 pe-11 bg-white border-2 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                {/* End Col */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="af-account-email"
                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                  >
                    Email
                  </label>
                </div>
                <div className="sm:col-span-9">
                  <input
                    id="email"
                    type="email"
                    onChange={userProfile.handleChange}
                    value={userProfile.values.email}
                    className="py-2 px-3 pe-11 bg-white border-2 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Enter your Email"
                  />
                </div>
                {/* End Col */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="password"
                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                  >
                    Password
                  </label>
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <div className="space-y-2">
                    <input
                      id="password"
                      type="text"
                      onChange={userProfile.handleChange}
                      value={userProfile.values.password}
                      className="py-2 px-3 pe-11 bg-white border-2 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter your password"
                    />
                    <input
                      type="text"
                      id="ConfirmPassword"
                      onChange={userProfile.handleChange}
                      value={userProfile.values.ConfirmPassword}
                      className="py-2 px-3 pe-11 bg-white border-2 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="af-account-email"
                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                  >
                    Address
                  </label>
                </div>
                <div className="sm:col-span-9">
                  <input
                    id="address"
                    type="text"
                    onChange={userProfile.handleChange}
                    value={userProfile.values.address}
                    className="py-2 px-3 pe-11 bg-white border-2 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Enter your Address"
                  />
                </div>
                {/* End Col */}
                <div className="sm:col-span-3">
                  <div className="inline-block">
                    <label
                      htmlFor="af-account-phone"
                      className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                    >
                      Phone
                    </label>
                  </div>
                </div>

                {/* End Col */}
                <div className="sm:col-span-9">
                  <div className="sm:flex">
                    <input
                      id="phone"
                      type="text"
                      onChange={userProfile.handleChange}
                      value={userProfile.values.phone}
                      className="py-2 px-3 bg-white border-2 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="+x(xxx)xxx-xx-xx"
                    />
                    <select className="py-2 px-3 pe-9 bg-white border-2 block w-full sm:w-auto border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                      <option selected="">Mobile</option>
                      <option>Home</option>
                      <option>Work</option>
                      <option>Fax</option>
                    </select>
                  </div>
                </div>
                {/* End Col */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="checkbox"
                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                  >
                    Gender
                  </label>
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <div className="sm:flex">
                    <label
                      htmlFor="gender-male"
                      className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    >
                      <input
                        id="gender-male"
                        type="radio"
                        name="gender"
                        className="shrink-0 mt-0.5  border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white  dark:checked:bg-blue-500 dark:checked:border-blue-500 "
                        onChange={userProfile.handleChange}
                        value="male"
                        defaultChecked=""
                        style={{
                          borderColor: "#fff",
                          backbackgroundColor: "#fff",
                        }}
                      />
                      <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                        Male
                      </span>
                    </label>
                    <label
                      htmlFor="gender-female"
                      className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    >
                      <input
                        id="gender-female"
                        type="radio"
                        name="gender"
                        className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        onChange={userProfile.handleChange}
                        value="female"
                      />
                      <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                        Female
                      </span>
                    </label>
                    <label
                      htmlFor="gender-other"
                      className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    >
                      <input
                        id="gender-other"
                        type="radio"
                        name="gender"
                        className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        onChange={userProfile.handleChange}
                        value="other"
                      />
                      <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                        Other
                      </span>
                    </label>
                  </div>
                </div>
                {/* End Col */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="af-account-bio"
                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                  >
                    BIO
                  </label>
                </div>
                {/* End Col */}
                <div className="sm:col-span-9">
                  <textarea
                    id="bio"
                    className="py-2 px-3 bg-white border-2 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    rows={6}
                    placeholder="Type your message..."
                    onChange={userProfile.handleChange}
                    value={userProfile.values.bio}
                    defaultValue={""}
                  />
                </div>
                {/* End Col */}
              </div>

              {/* End Grid */}
              <div className="mt-5 flex justify-end gap-x-2">
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* End Card */}
        </div>
        {/* End Card Section */}
      </>
    </div>
  );
};

export default profile;
