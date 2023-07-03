import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";


export const storeAudio = configureStore({
    reducer: { cartSlice, authSlice },
})