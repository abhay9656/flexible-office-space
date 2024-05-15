'use client'
import React, { createContext, useContext } from 'react';
import styles from './page.module.css'
import * as Yup from "yup";
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const loginSchema = Yup.object().shape({
  name:Yup.string().min(4,"Write Your Full name").required('Name required'),
  password:Yup.string().min(6,"too Small").required("PassWord is Required"),
});

const Login = () => {

  const router = useRouter();

  const LoginForm = useFormik({
    initialValues:{
      name:"",
      password:"",
    },
    onSubmit:(values)=>{
         console.log(values)
         fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          if (response.status === 200) {
            toast.success('Login Successfull');

            response.json()
              .then((data) => {
                sessionStorage.setItem('user', JSON.stringify(data));
                router.push('/'); 
              })

          } else {
            toast.error('Invalid Credentials');
          }
        }).catch((err) => {
          console.log(err);
          toast.error('Something went wrong');
        });
    },
    validationSchema:loginSchema,
  });

  return (
    <section>
    <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col">
          <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl">
            Unlock your Worspace,
            <span className="text-blue-700">Flex Space Login</span>
          </h1>
          <p className="mt-4 text-base font-medium text-blue-700 text-pretty">
           "Your Gateway to Productivity"
          </p>
        </div>
        <div className="p-2 border bg-gray-50 rounded-3xl">
          <div className="p-10 bg-white border shadow-lg rounded-3xl">
            <div>
              <button
                className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 md:hover:text-white bg-gray-100 rounded-xl hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                type="button"
                aria-label="Sign in with Google"
              >
                <ion-icon
                  name="logo-google"
                  role="img"
                  className="md hydrated"
                  aria-label="logo google"
                />
                <span>Login with Google</span>
              </button>
              <div className="relative py-3">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 text-sm text-black bg-white">
                    Or continue with
                  </span>
                </div>
              </div>
            </div>
            <form onSubmit={LoginForm.handleSubmit}>
              <div className="space-y-3">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-3 text-sm font-medium text-black"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    onChange={LoginForm.handleChange}
                    value={LoginForm.values.name}
                    className="block w-full h-12 px-4 py-2 bg-white text-black duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                  />
                   {LoginForm.touched.name && (
                            <small class="text-red-600">
                              {LoginForm.errors.name}
                            </small>
                          )}
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="password"
                    className="block mb-3 text-sm font-medium text-black"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    onChange={LoginForm.handleChange}
                    value={LoginForm.values.password}
                    className="block w-full h-12 px-4 py-2 text-black bg-white duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                    placeholder="Type password here..."
                    type="password"
                  />
                </div>
                {LoginForm.touched.password && (
                            <small class="text-red-600">
                              {LoginForm.errors.password}
                            </small>
                          )}
                <div className="col-span-full">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-blue-800 rounded-xl hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  >
                    Log in
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <p className="flex mx-auto text-sm font-medium leading-tight text-center text-black">
                  <Link href="/resetPassword" className='text-blue-500'>Forgot password</Link>
                  <Link
                    className="ml-auto text-blue-500 hover:text-black"
                    href="/signup"
                  >
                    Sign up now
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Login;