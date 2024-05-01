import React from 'react';

const browseSpace = () => {
  return (
    <div>
      <h1 className="text-3xl text-black font-bold text-center mt-8 mb-4">Browse<span className='text-blue-700'>Space</span></h1>
      <div>
        <div className="flex min-h-screen items-center justify-center">
          <div className="mx-auto px-5">
            <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
              <img
                className="w-full rounded-lg object-cover object-center"
                src="https://www.wework.com/ideas/wp-content/uploads/sites/4/2021/08/20201008-199WaterSt-2_fb.jpg"
                alt="product"
              />
              <div>
                <div className="my-6 flex items-center justify-between px-4">
                  <p className="font-bold text-gray-500">Space Detail</p>
                  
                </div>
                <div className="my-4 flex items-center justify-between px-4">
                  <p className="text-sm font-semibold text-gray-500">Area</p>
                  <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                    2300 sq
                  </p>
                </div>
                <div className="my-4 flex items-center justify-between px-4">
                  <p className="text-sm font-semibold text-gray-500">Duration</p>
                  <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                    7 Days
                  </p>
                </div>
                <div className="my-4 flex items-center justify-between px-4">
                  <p className="text-sm font-semibold text-gray-500">price</p>
                  <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                    4000
                  </p>
                </div>
                <div className="my-4 flex items-center justify-between px-4">
                  <p className="text-sm font-semibold text-gray-500">Date</p>
                  <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                    23/04/2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default browseSpace;
