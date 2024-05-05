'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const SpaceDetails = () => {

  const { id } = useParams();
  const [spaceDetails, setSpaceDetails] = useState(null);

  const fetchSpaceDetails = () => {
    fetch('http://localhost:5000/space/getbyid/' + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSpaceDetails(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchSpaceDetails();
  }, [])


  return (
    spaceDetails !== null ? (
      <>
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
          <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">

            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
              <div className="mt-12 flex flex-col items-center">
                <div className="w-full flex-1 mt-8">
                  <div className="mx-auto max-w-xs">
                    <h1 className="text-3xl text-center  font-bold mb-4">Space<span className='text-blue-700'>Detail</span></h1>
                    <label htmlFor="name" className="block font-semibold mb-1">
                      Name:{spaceDetails.name}
                    </label>
                    <label htmlFor="area" className="block font-semibold mb-1">
                      Area:{spaceDetails.area}
                    </label>
                    <label htmlFor="address" className="block font-semibold mb-1">
                      Address:{spaceDetails.address}
                    </label>
                    <label htmlFor="price" className="block font-semibold mb-1">
                      Price:{spaceDetails.price}
                    </label>
                    <label htmlFor="date" className="block font-semibold mb-1">
                      Date:{new Date(spaceDetails.date).toLocaleString()}
                    </label>
                    <Link href={'/user/booking/'+spaceDetails._id} className="mt-5 text-white tracking-wide font-semibold bg-blue-400 text-white-500 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">

                      Book Location
                    </Link>
                    {/* <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by Cartesian Kinetics
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      Terms of Service
                    </a>
                    and its
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      Privacy Policy
                    </a>
                  </p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-blue-100 text-center hidden lg:flex">
              <div
                className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    `url(${'http://localhost:5000/' + spaceDetails.image})`
                }}
              ></div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </>
    ) : (
      <div>
        Loading
      </div>
    )



  )
}

export default SpaceDetails;