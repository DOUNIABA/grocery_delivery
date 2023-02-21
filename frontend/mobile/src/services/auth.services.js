import axios from 'axios';
import { Alert } from 'react-native';
// import 'dotenv/config';

const ApiLogin = async (data) => {
    await axios.post('http://172.16.10.62:5000/api/auth/login', data)
        .then((res) => {
            if (!res.data.token) {
                console.log('Login filed', res.data.error)
            } else {
                console.log('Login success', res.data)
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

export default ApiLogin;
