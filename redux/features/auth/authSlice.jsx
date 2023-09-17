'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: undefined,
    isLoggedIn: false,
    loading: true,
    email: undefined,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.user = action.payload.user;
            state.loading = action.payload.loading;
            state.isLoggedIn = action.payload.isLoggedIn;
            state.email = action.payload.email;
        },
        userLogOut: (state) => {
            state.user = undefined;
            state.loading = false;
            state.isLoggedIn = false;
            state.email = undefined;
        },
        loading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export default authSlice.reducer;
export const { userLogOut, userLoggedIn, loading } = authSlice.actions;
