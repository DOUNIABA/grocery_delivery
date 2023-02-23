import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function formCategorie() {

  const [formData,SetformData]=useState([])

  const handleSubmit= async (e)=>{
      e.preventDefault();
      const categorie=await axios.post('http://172.16.8.43:5000/api/categorie/create-categorie',formData)
      if(categorie.data) window.location.reload(false);
      }

  const onChange = (e) => {
      SetformData({...formData, [e.target.name]: e.target.value });
    };

  return (
    <form className='d-flex justify-content-center' onSubmit={handleSubmit}>
        <div className='input-type'>
        <input type="text" name="name" placeholder='categorie' className='border px-5 py-2 focus:outline-none rounded-md'
         onChange={onChange}/>
    </div>
    <div className=" text-md px-5">
                <button className="btn btn-warning text-ligh py-2 border rounded-md ">Confirm</button>
            </div>
    </form>
  )
}
