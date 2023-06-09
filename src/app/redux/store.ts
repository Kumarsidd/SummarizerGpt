import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { summarizerApi } from "./summarize";

export const store = configureStore({
    reducer: {
        [summarizerApi.reducerPath]: summarizerApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(summarizerApi.middleware)
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;