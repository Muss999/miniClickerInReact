import { createSlice } from "@reduxjs/toolkit";

const clickerSlice = createSlice({
    name: "clicks",
    initialState: {
        clicks: 20,
    },
    reducers: {
        addClick: (state, action) => {
            state.clicks = state.clicks + 1;
        },
        removeClicks: (state, action) => {
            state.clicks = state.clicks * 0;
        },
    },
});

export const { addClick, removeClicks } = clickerSlice.actions;
export default clickerSlice.reducer;
