import { configureStore } from '@reduxjs/toolkit';
import matchDataSlice from './slices/matchDataSlice';

const store = configureStore({
    reducer: {
        matchDetail: matchDataSlice
    }
});

export default store;
