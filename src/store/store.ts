import { configureStore } from '@reduxjs/toolkit';
import matchDataSlice from './slices/matchDataSlice';
import modalSlice from './slices/modalSlice';

const store = configureStore({
    reducer: {
        matchDetail: matchDataSlice,
        modals: modalSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }),
});

export default store;
