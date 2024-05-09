'use client';
import React, { useEffect, useState } from 'react'

const viewFeedback = () => {
  const [feedback, setFeedback] = useState([]);

  const getfeedback = async () => {
    const res = await fetch("http://localhost:5000/feedback/getall")
    console.log(res);
    const data = await res.json();
    console.log(data);
    setFeedback(data);
  }

  useEffect(() => {
    getfeedback();
  }, [])

  const displayfeedback = () => {
    return (
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Feedback
            </th>

          </tr>
        </thead>
        {
          feedback.map((feed) => {
            return (
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {feed.name}
                  </th>
                  <td className="px-6 py-4">{feed.email}</td>
                  <td className="px-6 py-4">{feed.comment}</td>

                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">White</td>
                  <td className="px-6 py-4">Laptop PC</td>

                </tr>

              </tbody>
            )
          })
        }

      </table>
    )
  }
  return (
    <div>
      <div className="relative overflow-x-auto">
     {
      displayfeedback()
     }
      </div>

    </div>
  )
}

export default viewFeedback
