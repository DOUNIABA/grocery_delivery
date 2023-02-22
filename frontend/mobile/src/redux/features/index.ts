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

        SETMESSAGE: state => {
            state.message = ''
        },

        SETTOKEN: (state, action) => {
            state.token = action.payload
        }
    },
})

export const { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SETMESSAGE } = AuthSlice.actions

export default AuthSlice