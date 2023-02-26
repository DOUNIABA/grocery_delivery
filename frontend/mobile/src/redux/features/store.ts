import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StoreSlice = createSlice({
    name: 'store',
    initialState: {
        products: [] as any
    },
    reducers: {
        ADD_STORE: (state, action) => {
            state.products = [action.payload]
            AsyncStorage.setItem('store', JSON.stringify(state.products))
        },
        SETSTATESTORE: (state, action) => {
            state.products = JSON.parse(action.payload.store)
            AsyncStorage.setItem('store', JSON.stringify(state.products))
        }
    },
})

export const { ADD_STORE, SETSTATESTORE } = StoreSlice.actions

export default StoreSlice