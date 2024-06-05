'use client';
import React, { useEffect, useState } from 'react'
import StarRatings from 'react-star-ratings';

const viewContact= () => {
  const [Contact, setContact] = useState([]);


  const getContact = async () => {
    const res = await fetch("http://localhost:5500/contact/getall")
    console.log(res);
    const data = await res.json();
    console.log(data);
    setContact(data);
  }

const deleteConatct = (id) => {
    fetch('http://localhost:5500/contact/delete/' + id, {
      method: 'DELETE',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        getContact();
      })
      .catch((err) => {
        console.log(err);
      });
}


  useEffect(() => {
    getContact();
  }, [])

  const displayContact = () => {
    return (
     <>
     <div> 
        <h1 className='text-black text-3xl  text-center my-4 font-bold'>View<span className='text-blue-700' >Conatact</span> </h1>
     </div>
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
              Subject
            </th>
            <th scope="col" className="px-6 py-3">
              Message
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        {
          Contact.map((feed) => {
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
                  <td className="px-6 py-4">{feed.subject}</td>
                  
                  <td className="px-6 py-4">
                   {feed.message}
                 </td>
               
                  <td className="px-6 py-4">
                    <button onClick={()=>deleteConatct(feed._id)} className='border-1 w-14 h-8 rounded-md text-white  bg-red-600'>Delete</button>
                  </td>

                </tr>
             

              </tbody>
            )
          })
        }

      </table>
      </>
    )
  }
  
  return (
    <div>
      <div className="relative overflow-x-auto">
     {
      displayContact()
     }
      </div>

    </div>
  )
}


export default viewContact
