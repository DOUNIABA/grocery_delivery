import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './features/index';

export default configureStore({
    reducer: {
        Auth: AuthSlice.reducer
    }
})