import mongoose from 'mongoose'
require('dotenv').config()

const connect_base: any = process.env.DB_CONNECT

mongoose.connect(connect_base)
    .then(() => {
        console.log('connected');
    })
    .catch(error => {
        console.log((error));
    })
