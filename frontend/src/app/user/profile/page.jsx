import React from 'react'


const UserProfile = () => {
  return (
    <div>
      
      <>
  {/* Hero */}
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
    {/* Grid */}
    <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
      <div className="lg:col-span-3">
        <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
          Revolutionzies your WorkSpace
        </h1>
        <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
        Book from thousands of unique work and meeting spaces.
        </p>
        <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div className="w-full sm:w-auto">
            <label htmlFor="hero-input" className="sr-only">
              Search
            </label>
            <input
              type="text"
              id="hero-input"
              name="hero-input"
              className="py-3 px-4 bg-black-500 block w-full xl:min-w-72 border-black rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Enter work email"
            />
          </div>
          <a
            className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            send
          </a>
        </div>
        {/* Brands */}
        
        {/* End Brands */}
      </div>
      {/* End Col */}
      <div className="lg:col-span-4 mt-10 lg:mt-0">
        <img
          className="w-full rounded-xl"
          src="/desk.png"
          alt="Image Description"
        />
      </div>
    </div>
  </div>
  {/* hero section */}
  <div className="hero min-h-screen" style={{backgroundImage: 'url("/1992.jpg")'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Lets Make your Work Easier</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
{/* gallery */}
<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/* text - start */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
        Top Location
      </h2>
      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
        This is a section of some simple filler text, also known as placeholder
        text. It shares some characteristics of a real written text but is
        random or otherwise generated.
      </p>
    </div>
    {/* text - end */}
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
      {/* image - start */}
      <a
        href="#"
        className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96"
      >
        <img
          src="/office2.avif"
          loading="lazy"
          alt="Photo by Minh Pham"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
        <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">
          Hazratganj
        </span>
      </a>
      {/* image - end */}
      {/* image - start */}
      <a
        href="#"
        className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96"
      >
        <img
          src="/office1.webp"
          loading="lazy"
          alt="Photo by Lorenzo Herrera"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
        <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">
          Gomti Nagar
        </span>
      </a>
      {/* image - end */}
      {/* image - start */}
      <a
        href="#"
        className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96"
      >
        <img
          src="/office3.jpg"
          loading="lazy"
          alt="Photo by Magicle"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
        <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">
          Indira Nagar
        </span>
      </a>
      {/* image - end */}
    </div>
  </div>
</div>
{/* features */}
<div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
  <div className="relative">
    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
      <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
        <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
          Interactive
        </p>
        <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
          Interactivity between team members is the key of the success.
        </h4>
        <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
          Build a simply and powered collaborative space for all your team.
          Track, share, measure, you have a fully control, it's never be simply
          and efficient.
        </p>
        <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
          <li className="mt-6 lg:mt-0">
            <div className="flex">
              <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                Live modifications
              </span>
            </div>
          </li>
          <li className="mt-6 lg:mt-0">
            <div className="flex">
              <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                Data tracker
              </span>
            </div>
          </li>
          <li className="mt-6 lg:mt-0">
            <div className="flex">
              <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                24/24 support
              </span>
            </div>
          </li>
          <li className="mt-6 lg:mt-0">
            <div className="flex">
              <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                Free tips to improve work time
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
        <div className="relative space-y-4">
          <div className="flex items-end justify-center space-x-4 lg:justify-start">
            <img
              className="w-52 h-72 rounded-lg shadow-lg md:w-56"
              width={200}
              src="/office2.avif"
              alt={1}
            />
            <img
              className="w-40 rounded-lg shadow-lg md:w-64"
              width={260}
              src="/office1.webp"
              alt={2}
            />
          </div>
          <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
            <img
              className="w-48 h-72 rounded-lg shadow-lg md:w-40"
              width={170}
              src="/office.png"
              alt={3}
            />
            <img
              className="w-2/4 rounded-lg shadow-lg md:w-56"
              width={200}
              src="/office3.jpg"
              alt={4}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* footer */}
<footer className="bg-white">
  <div className="bg-blue-700 py-6">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
        <div className="mb-3 text-center md:mb-0 md:text-left">
          <span className="font-bold uppercase tracking-widest text-gray-100">
            Newsletter
          </span>
          <p className="text-indigo-200">Subscribe to our newsletter</p>
        </div>
        <form className="flex w-full gap-2 md:max-w-md">
          <input
            placeholder="Email"
            className="w-full flex-1 rounded border border-white bg-blue-500 px-3 py-2 text-white placeholder-indigo-100 outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
          <button className="inline-block rounded bg-white px-8 py-2 text-center text-sm font-semibold text-indigo-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:text-indigo-600 md:text-base">
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
  <div className="pt-12 lg:pt-16">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
        <div className="col-span-full lg:col-span-2">
          {/* logo - start */}
          <div className="mb-4 lg:-mt-2">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl"
              aria-label="logo"
            >
          
              Office<span className='text-blue-700'>Space</span>
            </a>
          </div>
          {/* logo - end */}
          <p className="mb-6 text-gray-500 sm:pr-8">
           More than just a place to work,its a place to grow
          </p>
          {/* social - start */}
          <div className="flex gap-4">
            <a
              href="#"
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <svg
                className="h-5 w-5"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <svg
                className="h-5 w-5"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <svg
                className="h-5 w-5"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
          {/* <FaThreads/> */}
            </a>
          </div>
          {/* social - end */}
        </div>
        {/* nav - start */}
        <div>
          <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
            Plans
          </div>
          <nav className="flex flex-col gap-4">
            <div>
              <a
                href="#"
                className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Private Space
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Coworking Space
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Meeting Room
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Event Space
              </a>
            </div>
          </nav>
        </div>
        {/* nav - end */}
        {/* nav - start */}
        <div>
          <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
            Company
          </div>
          <nav className="flex flex-col gap-4">
            <div>
              <a
                href="#"
                className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                About
              </a>
            </div>
          
            <div>
              <a
                href="#"
                className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Jobs
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Press
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Blog
              </a>
            </div>
          </nav>
        </div>
        {/* nav - end */}
        {/* nav - start */}
        <div>
          <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
            Support
          </div>
          <nav className="flex flex-col gap-4">
            <div>
              <a
                href="#"
                className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Contact
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Documentation
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Chat
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                FAQ
              </a>
            </div>
          </nav>
        </div>
        {/* nav - end */}
        {/* nav - start */}
        <div>
          <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
            Legal
          </div>
          <nav className="flex flex-col gap-4">
            <div>
              <a
                href="#"
                className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Terms of Service
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Privacy Policy
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Cookie settings
              </a>
            </div>
          </nav>
        </div>
        {/* nav - end */}
      </div>
    </div>
  </div>
</footer>

</>
    </div>
  )
}

export default UserProfile;