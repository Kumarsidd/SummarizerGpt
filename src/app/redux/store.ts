import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { summarizerApi, imageApi } from "./services";

export const store = configureStore({
    reducer: {
        [summarizerApi.reducerPath]: summarizerApi.reducer,
        [imageApi.reducerPath] : imageApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(summarizerApi.middleware, imageApi.middleware)
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;