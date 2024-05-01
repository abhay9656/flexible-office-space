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
                src="https://images.unsplash.com/photo-1580477371194-4593e3c7c6cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="product"
              />
              <div>
                <div className="my-6 flex items-center justify-between px-4">
                  <p className="font-bold text-gray-500">Space</p>
                  
                </div>
                <div className="my-4 flex items-center justify-between px-4">
                  <p className="text-sm font-semibold text-gray-500">First option</p>
                  <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                    23
                  </p>
                </div>
                <div className="my-4 flex items-center justify-between px-4">
                  <p className="text-sm font-semibold text-gray-500">Second option</p>
                  <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                    7
                  </p>
                </div>
                <div className="my-4 flex items-center justify-between px-4">
                  <p className="text-sm font-semibold text-gray-500">Third option</p>
                  <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                    1
                  </p>
                </div>
                <div className="my-4 flex items-center justify-between px-4">
                  <p className="text-sm font-semibold text-gray-500">Fourth option</p>
                  <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                    23
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
