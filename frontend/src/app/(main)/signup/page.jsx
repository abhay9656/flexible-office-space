"use client";
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Link from "next/link";

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(4, "Name pura likho").required("Naam nhi hai kya?"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Password is required").min(6, "Too small"),
});

const signup = () => {
  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // send values to backend
    },
    validationSchema: SignupSchema,
  });

  return (
    <div>
      <section className="vh-100 bg-primary-subtle">
        <div className="container mx-auto sm:px-4 py-5 h-full">
          <div className=" flex-wrap  flex justify-center items-center h-full">
            <div className="relative flex-grow max-w-full flex-1 px-4">
              <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 shadow my-4">
                <div className="flex flex-wrap  g-0">
                  <div className="xl:w-1/2 pr-4 pl-4 hidden xl:block">
                    <div
                      style={{
                        backgroundImage: `url('./office.png')`,
                        height: "100%",
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                    {/* <img
                    src="https://assets.materialup.com/uploads/7563d4bc-0ed9-4202-a86c-ac8dc46e73ef/preview.jpg"
                    alt="Sample"
                    className="max-w-full h-auto"
                  /> */}
                  </div>
                  <div className="xl:w-1/2 pr-4 pl-4">
                    <div className="flex-auto p-6 md:p-12">
                      <h1 className="mb-5 text-blue-600 text-center text-4xl font-bold">
                        Sign up
                      </h1>
                      <form onSubmit={signupForm.handleSubmit}>
                        <div class="mb-3">
                          <label for="">
                            Email Address
                          </label>
                          <input
                            type="text"
                            id="email"
                            onChange={signupForm.handleChange}
                            value={signupForm.values.email}
                            class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                            placeholder=""
                          />
                          {signupForm.touched.email && (
                            <small class="text-red-600">
                              {signupForm.errors.email}
                            </small>
                          )}
                        </div>
                        <div class="mb-3">
                          <label for="" class="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            onChange={signupForm.handleChange}
                            value={signupForm.values.name}
                            class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                            placeholder=""
                          />
                          {signupForm.touched.name && (
                            <small class="text-red-600">
                              {signupForm.errors.name}
                            </small>
                          )}
                        </div>
                        <div class="mb-3">
                          <label for="" class="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            onChange={signupForm.handleChange}
                            value={signupForm.values.password}
                            class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                            placeholder=""
                          />
                          {signupForm.touched.password && (
                            <small class="text-red-600">
                              {signupForm.errors.password}
                            </small>
                          )}
                        </div>
                        <div class="mb-3">
                          <label for="" class="form-label">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            id="confirmPassword"
                            onChange={signupForm.handleChange}
                            value={signupForm.values.confirmPassword}
                            class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                            placeholder=""
                          />
                          {signupForm.touched.confirmPassword && (
                            <small class="text-red-600">
                              {signupForm.errors.confirmPassword}
                            </small>
                          )}
                        </div>
                        <div className="relative block mb-2 ">
                          <input
                            className="absolute mt-1 -ml-6 me-2"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example33"
                            defaultChecked=""
                          />
                          <label
                            className="text-gray-700 pl-6 mb-0"
                            htmlFor="form2Example33"
                          >
                            I Agree to Terms & Conditions
                          </label>
                        </div>
                        <div className="flex justify-end pt-3">
                          <button
                            type="button"
                            className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-gray-100 text-gray-800 hover:bg-gray-200"
                          >
                            Reset all
                          </button>
                          <button
                            type="submit"
                            className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 ms-2"
                          >
                            Submit form
                          </button>
                        </div>
                      </form>

                      <p>
                        Already Registered?{" "}
                        <Link href="/login">Login Here</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default signup;
