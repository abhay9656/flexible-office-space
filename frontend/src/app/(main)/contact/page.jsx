'use client'
import { useFormik } from 'formik';
import React, { useState } from 'react'

const Contact = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

   const contactForm=useFormik({
    initialValues: currentUser,
    onSubmit: (values,{resetForm}) => {
      console.log(values);
      fetch('http://localhost:5000/user/update/'+currentUser._id,{
        method:'PUT',
        body:JSON.stringify(values),
        headers:{
          'content-Type':'application/json'
        }
      })
      .then((response) => {
        console.log(response.status);
        if(response.status===200)
        {
          toast.success("Message Send Successfully")
          resetForm({ values: userProfile.initialValues });
        }
        else{
          toast.error("Message Send Failed")
        }
      }).catch((err) => {
        console.log(err);
        toast.error("Contact us Failed")
      });
    },
   })

  return (
    <div>
  <section className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-12 mx-auto">
    <div className="text-center ">
      <p className="font-bold text-4xl text-black dark:text-blue-400">Contact<span className='text-blue-700'>Us</span> </p>
      <h1 className="mt-2 text-2xl font-semibold text-gray-600 md:text-3xl dark:text-white">
        We’d love to hear from you
      </h1>
      <p className="mt-3 text-gray-500 dark:text-gray-400">
        Chat to our friendly team.
      </p>
    </div>
    <img
      className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96"
      src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=100"
      alt=""
    />
    <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2 ">
      <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
        <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </span>
        <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
          Chat to sales
        </h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Speak to our friendly team.
        </p>
        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
          officeSpace@gmail.com
        </p>
      </div>
      <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
        <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </span>
        <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
          Visit us
        </h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Visit our office HQ..
        </p>
        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
          Lucknow,Uttar Pradesh,India
        </p>
      </div>
      <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
        <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
        </span>
        <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
          Call us
        </h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Mon-Fri from 8am to 5pm.
        </p>
        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
          +91 (90000-00000)
        </p>
      </div>
    </div>
  </div>
</section>
<>
  {/* component */}
  <div className="flex items-center justify-center p-12">
    {/* Author: FormBold Team */}
    {/* Learn More: https://formbold.com */}
    <div className="mx-auto w-full max-w-[550px]">
      <form onSubmit={contactForm.handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={contactForm.handleChange}
            value={contactForm.values.name}
            placeholder="Full Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={contactForm.handleChange}
            value={contactForm.values.email}
            placeholder="example@domain.com"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="subject"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            onChange={contactForm.handleChange}
            value={contactForm.values.subject}
            placeholder="Enter your subject"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Message
          </label>
          <textarea
            rows={4}
            name="message"
            id="message"
            onChange={contactForm.handleChange}
            value={contactForm.values.message}
            placeholder="Type your message"
            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            defaultValue={""}
          />
        </div>
        <div>
          <button type='submit' className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</>

    </div>
  )
}

export default Contact;