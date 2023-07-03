import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    accessToke: "",
    isLogged: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: ()=>{}
    },
})

export const { login } = authSlice.actions

export default authSlice.reducer