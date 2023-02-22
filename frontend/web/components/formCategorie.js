
import React from 'react'

export default function formCategorie() {
  return (
    <form className='d-flex justify-content-center '>
        <div className='input-type'>
        <input type="text" name="categorie" placeholder='categorie' className='border px-5 py-2 focus:outline-none rounded-md'/>
    </div>
    <div className=" text-md px-5">
                <button className="btn btn-warning text-ligh py-2 border rounded-md ">Confirm</button>
            </div>
    </form>
  )
}
