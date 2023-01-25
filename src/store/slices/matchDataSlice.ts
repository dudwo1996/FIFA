import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    data: [],
};

const matchDataSlice = createSlice({
    name: "match",
    initialState,
    reducers: {
        set(state, action) {
            state.data= action.payload
        },
    }
})

export const matchDataActions = matchDataSlice.actions;
export default matchDataSlice.reducer;