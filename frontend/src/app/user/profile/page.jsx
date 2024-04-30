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

</>
    </div>
  )
}

export default UserProfile;