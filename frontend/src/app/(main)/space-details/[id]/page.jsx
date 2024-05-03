'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const SpaceDetails = () => {

  const {id} = useParams();
  const [spaceDetails, setSpaceDetails] = useState(null);

  const fetchSpaceDetails = () => {
    fetch('http://localhost:5000/space/getbyid/'+id)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const displayDetails = () => {
    if(spaceDetails!==null){
      return <div></div>
    }else{
      <h2>Loading...</h2>
    }
  }
  

  useEffect(() => {
    fetchSpaceDetails();
  }, [])
  

  return (
    <div>
        
    </div>
  )
}

export default SpaceDetails;