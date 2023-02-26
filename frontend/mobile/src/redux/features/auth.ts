import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserData {
    username: string
    email: string
}

let initialState = {
    isLogin: false,
    message: '',
    user: {} as UserData,
    token: ""
}

const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        LOGIN_SUCCESS: (state, action) => {
            state.isLogin = true,
                state.message = 'Login success',
                state.user = action.payload.user,
                state.token = action.payload.token
        },
        LOGIN_FAIL: (state, action) => {
            state.isLogin = false,
                state.message = 'Login Failed'
        },
        LOGOUT: (state, action) => {
            state.isLogin = false,
                state.message = ''
        },

        REGISTER_SUCCESS: (state, action) => {
            state.message = action.payload
        },
        REGISTER_FAIL: (state, action) => {
            state.message = action.payload
        },

        SETMESSAGE: state => {
            state.message = ''
        },
        SETSTATE: (state, action) => {
            state.token = action.payload.token
            state.user = action.payload.user
        }
    },
})

export const { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT, SETMESSAGE, SETSTATE } = AuthSlice.actions

export default AuthSlice