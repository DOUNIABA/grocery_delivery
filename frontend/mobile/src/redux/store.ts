import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './features/auth';
import StoreSlice from './features/store';

export default configureStore({
    reducer: {
        Auth: AuthSlice.reducer,
        Store: StoreSlice.reducer,
    }
})