'use client'

import { IconCircleCheck, IconCircleX } from '@tabler/icons-react'
import { useParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'next/navigation'
import Link from 'next/link';


const ThankYou = () => {

  const hasRun = useRef();

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const { tutorid } = useParams();
  //   const location = useLocation();
  let params = new URLSearchParams(location.search);

  const savePayment = async () => {
    const { date, time, duration } = JSON.parse(sessionStorage.getItem('bookingDetails'));
    const spaceDetails = JSON.parse(sessionStorage.getItem('spaceDetails'));
    const paymentDetails = await retrievePaymentIntent();
    const response = await fetch(`http://localhost:5500/booking/addBooking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        space: spaceDetails._id,
        date,
        time,
        duration,
        paymentDetails,
        intentId: params.get('payment_intent'),
      })
    });
    console.log(response.status);

  }

  const retrievePaymentIntent = async () => {
    const response = await fetch(`http://localhost:5500/retrieve-payment-intent`, {
      method: 'POST',
      body: JSON.stringify({ paymentIntentId: params.get('payment_intent') }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response.status);
    const data = await response.json();
    // console.log(data);
    return data;
  }

  useEffect(() => {
    console.log(params.get('redirect_status'));
    if (!hasRun.current) {
      hasRun.current = true;
      if (params.get('redirect_status') === 'succeeded') {
        savePayment();
      }
    }
  }, []);

  return (
    <>

      <div >
        <div  style={{ height: '50vh' }}>
          {
            params.get('redirect_status') === 'succeeded' ?
              <>
                <div className="flex h-screen items-center justify-center bg-gray-100 py-10">
                  <div className="mx-auto max-w-md overflow-hidden rounded-3xl text-gray-700 shadow-md">
                    <div className="h-48  bg-white pt-10 sm:h-56">
                      <img
                        className="h-full w-full object-contain"
                        src="/thanks.svg"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col items-center bg-white px-4 py-10">
                      <h2 className="mb-2 text-3xl font-bold text-blue-700 sm:text-4xl">
                        Payment Done
                      </h2>
                      <p className="mb-8 text-center font-medium text-gray-500">
                        Thank you for your payment. Your booking is confirmed.
                      </p>
                     <Link href={'/'}>Go Back To Home</Link>
                    </div>
                  </div>
                </div>

              </>
              :
              <>
                <div><IconCircleX style={{ size: '100' }} /></div>
                <h1 style={{ size: 'xl' }}>Payment Failed</h1>
                <p style={{ size: 'lg' }}>Your payment was not successful. Please try again.</p>
                <p style={{ size: 'lg' }}>If the problem persists, please contact us.</p>
                <Link href={'/'} className='color-blue mt-20'>Go to Home</Link>
              </>
          }


        </div>
      </div>

    </>
  )
}
export default ThankYou;