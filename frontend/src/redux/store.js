import {configureStore} from '@reduxjs/toolkit';
import exampleReducer from './example/exampleSlice';

export const store = configureStore({
    reducer: {
        example: exampleReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})