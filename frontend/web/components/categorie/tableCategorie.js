import React, { useEffect, useState } from 'react'
import axios from "axios"
 
 export default function table() {
    const [categories,setCategories]=useState([])

    const remove = async (e) => {
        e.preventDefault();
        const categories = await axios.delete("http://172.16.8.43:5000/api/categorie/Remove-categorie",{ id: e.target.value });
        if (categories.data) 
        console.log(categories.data)
        // window.location.reload(false);
      };
    
    const data= async ()=>{
        await axios.get('http://172.16.8.43:5000/api/categorie/get-all-categorie')
            .then((value)=>{
                setCategories(value.data.categories)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

useEffect(()=>{
    data();
},[])

   return (

        <div className=" table-responsive">
                <table className="container mx-auto table">
                <thead>
                    <tr className="bg-gray">
                    <th scope="col" className='col-3'>#</th>
                    <th scope="col" className='col-6'>Name</th>
                    <th scope="col" className='col-3'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    categories.map((e,i)=>(
                    <tr key={e._id}>
                    <th scope="row">{i+1}</th>
                    <td>{e.name}</td>
                    <td className="px-3 d-flex justify-content-around ">
                    <button type="submit" className="btn btn-secondary">Edit</button>
                    <button type="submit" className=" btn btn-secondary" value={e._id} onClick={remove}>Delete</button>
                    </td>
                    </tr>
                        ))
                    }
           
                    </tbody>
                </table>
            </div>
     
   )
 }
 