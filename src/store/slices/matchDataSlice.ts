import { createSlice } from '@reduxjs/toolkit';
import { ReduxRootState } from '../store';


const initialState = {
    data: [],
};

const matchDataSlice = createSlice({
    name: "match",
    initialState,
    reducers: {
        set(state, action) {
            state.data = action.payload
        },
    }
})

export const matchDataActions = matchDataSlice.actions;
export const selectDatas = () => (root: ReduxRootState) => root.matchDetail.data
export default matchDataSlice.reducer;