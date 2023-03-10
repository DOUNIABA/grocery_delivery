import React from 'react';
import colors from '@/assets/styles/colors';
import axios from 'axios';

export default function Login() {
  const [login, setLogin] = React.useState({ email: '', password: '' })
  const [message, setMessage] = React.useState('')
  const onChange = (e) => {
    const value = e.target.value;
    setLogin({ ...login, [e.target.name]: value })
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/auth/login', login)
      .then((value) => {
        if(!value.data.error) {
          localStorage.setItem('token', value.data.token)
          localStorage.setItem('user', value.data.user)
          window.location.href = 'statistique'
        }
        else setMessage(value.data.error)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  React.useEffect(() => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    if (token && user) window.location.href = '/Statistique'
  }, [])

  return (
    <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
      <div className='col-lg-3 col-sm-5 col-10 d-flex flex-column justify-content-center align-items-center gap-4 shadow-sm py-5' style={{ background: colors.black, borderRadius: 12 }}>
        <h1 className='h1' style={{ color: colors.color1 }}>Login</h1>
        <h1 className='h5' style={{ color: 'red' }}>{message}</h1>
        <div className="form-floating text-muted col-10">
          <input className="form-control" type='text' onChange={onChange} id='floatingEmail' name='email' placeholder='Email' style={{ background: colors.black }} />
          <label htmlFor='floatingEmail'>Password</label>
        </div>
        <div className="form-floating text-muted col-10">
          <input className="form-control" type='password' onChange={onChange} id='floatingPassword' name='password' placeholder='Password' style={{ background: colors.black }} />
          <label htmlFor='floatingPassword'>Password</label>
        </div>
        <div className="w-50 form-group d-flex justify-content-center position-relative" style={{ background: colors.color1, borderRadius: 8 }}>
          <button type='submit' onClick={onSubmit} className="btn rounded p-3 fw-bold" style={{ color: colors.white }}>Login</button>
        </div>
      </div>
    </div>
  )
}
