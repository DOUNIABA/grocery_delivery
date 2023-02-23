 import React from 'react'
 
 export default function table() {
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
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td className="px-3 d-flex justify-content-around ">
                    <button type="submit" className="btn btn-secondary">Edit</button>
                    <button type="submit" className=" btn btn-secondary">Delet</button>
                    </td>
                    </tr>
                    </tbody>
                </table>
            </div>
     
 
   )
 }
 