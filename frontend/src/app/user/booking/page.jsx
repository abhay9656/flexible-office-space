import React from 'react'

const Booking = () => {
  return (
    <div>
      <>
  {/* component */}
  <div className="bg-white relative lg:py-20">
    <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
      <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
        <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
          <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
            <img
              src="/space.png"
              className="btn-"
            />
          </div>
        </div>
        <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
          <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
            <p className="w-full text-4xl font-medium text-center text-black leading-snug font-serif">
             Booking
            </p>
            <>


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
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
    </div>
  </div>

<div>
  <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
    Book Now
  </button>
</div>

</>

          </div>
        </div>
      </div>
    </div>
  </div>
</>
    </div>
  )
}

export default Booking
