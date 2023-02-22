import axios from 'axios';

// import { useDispatch } from 'react-redux';
// const dispatch = useDispatch();

const SERVER = 'http://172.16.10.62:5000'

export const ApiLogin = async (data) => {
    await axios.post(`${SERVER}/api/auth/login`, data)
        .then((res) => {
            if (!res.data.token) {
                dispatch(LOGIN_FAIL, res.data.error)
            } else {
                dispatch(LOGIN_SUCCESS, res.data)
            }
        })
        .catch((error) => {
            console.log(error)
        })
}
export const ApiRegister = async (data) => {
    await axios.post(`${SERVER}/api/auth/register`, data)
        .then((res) => {
            if (!res.data.message) {
                console.log('Login filed: ', res.data.error)
            } else {
                console.log('Login success: ', res.data.message)
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

// module.exports = { ApiLogin, ApiRegister }