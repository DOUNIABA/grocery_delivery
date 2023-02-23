import React from 'react'
import axios from "axios"

export default function formVenduer() {
  const [addVendeur, setAddVendeur] = React.useState({ username: '', email: '' })
  const [message, setMessage] = React.useState('')
  const onChange = (e) => {
    const value = e.target.value;
    setAddVendeur({ ...addVendeur, [e.target.name]: value })
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://172.26.48.1:5000/api/vendeur/add-vendeur', addVendeur)
      .then((value) => {
        setMessage(value.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <form className='d-flex justify-content-center gap-3'>
      <input type="text" onChange={onChange} name="username" placeholder='Username' className='border ps-3 focus:outline-none rounded-md' />
      <input type="text" onChange={onChange} name="email" placeholder='Email' className='border ps-3 focus:outline-none rounded-md' />
      <button onClick={onSubmit} className="btn btn-warning text-md text-ligh py-2 px-4 border rounded-md ">Add</button>
      <div className='d-flex align-items-center'>{
        message.error
        ? <div className="text-danger">{message.error}</div>
        : <div className="text-success">{message.message}</div>
      }</div>
    </form>
  )
}
