import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "@/stores/DarkMode.slice";
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import columnSlice from "./Column.slice";

export const store = configureStore({
    reducer: {
        darkMode: darkModeSlice.reducer,
        column: columnSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
