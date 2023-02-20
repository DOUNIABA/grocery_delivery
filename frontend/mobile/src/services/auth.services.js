import axios from 'axios';
// import 'dotenv/config';

const ApiLogin = async () => {
    await axios.get('http://192.168.1.10:5000/api/livreur/get-all-livreur')
        .then((response) => { console.log(response) })
        .catch((error) => console.log(error))
}

export default ApiLogin;
