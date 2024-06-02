"use client";
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Link from "next/link";
import toast from 'react-hot-toast';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(4, "Name pura likho").required("Naam nhi hai kya?"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required('Password is required')
  .min(6, 'Too small').matches(/[a-z]/,'Must include lowercase letter')
  .matches(/[A-Z]/,'Must include Uppercase letter')
  .matches(/[0-9]/,'Must include lnumber letter')
  .matches(/\W/,'Must include special case'),
  ConfirmPassword:Yup.string().oneOf([Yup.ref('password'),null],'Password must match').required('Password is required')
});

const signup = () => {
  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      ConfirmPassword: "",
    },
    onSubmit: (values,{resetForm}) => {
      console.log(values);
      // send values to backend
      fetch('http://localhost:5500/user/add',{
        method:'POST',
        body:JSON.stringify(values),
        headers:{
          'content-Type':'application/json'
        }
      })
      .then((response) => {
        console.log(response.status);
        if(response.status===200)
        {
          toast.success("Sign up Successfully")
          resetForm();
        }
        else{
          toast.error("Sign up Failed")
        }
      }).catch((err) => {
        console.log(err);
        toast.error("Sign up Failed")
      });
    },
    validationSchema: SignupSchema,
  });

  return (
    <div>
      <section className="vh-100 bg-primary-subtle">
        <div className="container mx-auto sm:px-4 py-5 h-full">
          <div className=" flex-wrap  flex justify-center items-center h-full">
            <div className="relative flex-grow max-w-full flex-1 px-4">
              <div className="relative flex flex-col min-w-0 rounded break-words  bg-white  border-gray-300  my-4">
                <div className="flex flex-wrap  g-0">
                  <div className="xl:w-1/2 pr-4 pl-4 hidden xl:block">
                    <div
                      style={{
                        backgroundImage: `url('./page.png')`,
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
                      <h1 className="mb-5 text-black text-center text-4xl font-bold">
                        Sign<span className="text-blue-700">up</span> 
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
                            id="ConfirmPassword"
                            onChange={signupForm.handleChange}
                            value={signupForm.values.ConfirmPassword}
                            class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                            placeholder=""
                          />
                          {signupForm.touched.ConfirmPassword && (
                            <small class="text-red-600">
                              {signupForm.errors.ConfirmPassword}
                            </small>
                          )}
                        </div>
                        <div className="relative block mb-2 ">
                          {/* <input
                            className="absolute mt-1 -ml-6 me-2"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example33"
                            defaultChecked=""
                          /> */}
                          {/* <label
                            className="text-gray-700 pl-6 mb-0"
                            htmlFor="form2Example33"
                          >
                            I Agree to Terms & Conditions
                          </label> */}
                        </div>
                        <div className="flex justify-center pt-3">
                          <button
                            href={'/login'}
                            type="submit"
                            className=" w-full h-12 font-bold   text-center select-none border text-xl  whitespace-no-wrap rounded py-2 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 mb-3"
                          >
                            Sign Up
                          </button>
                        </div>
                      </form>

                      <p>
                        Already Registered?{" "}
                        <Link href="/login" className="text-blue-500">Login Here</Link>
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
