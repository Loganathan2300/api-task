import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Table from '../component/Table';

const Email = () => {
  const params =useParams()
  const[userEmail,setUserEmail]=useState([])
  const getValue = () => {
    axios
      .get(`https://gorest.co.in/public/v2/users/${params.id}`, {
        headers: {
          Authorization:
            "Bearer 8b0977e6f9372784a4e885e802cd121e86ad7db2a37f2c4d6831dd5dd5e2d36c",
        },
      })
      .then((res) => {
        setUserEmail(res.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
    };
  useEffect(() => {
    getValue();
  },[params]);
  return (
    <div className='py-5 my-5'><Table user={[userEmail]} show={false} /></div>
  )
}

export default Email