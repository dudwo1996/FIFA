import { createSlice } from "@reduxjs/toolkit";
import { ModalType } from "../../model";

const initialState: ModalType[] = [];

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        open: (state, action) => {
            state.push(action.payload);
        },
        close: (state, action) => {
            const key = action.payload;
            const index = state.findIndex((modal) => modal.key === key);
            if (index !== -1) state.splice(index, 1);
        },
        closeAll: (state) => {
            return initialState;
        },
    },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;