import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlices";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

// ✅ Extracts the **entire state structure** of the store
export type RootState = ReturnType<typeof store.getState>;

// ✅ Extracts the **dispatch function type**
export type AppDispatch = typeof store.dispatch;
