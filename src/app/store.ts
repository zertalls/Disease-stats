import { diseaseApi } from "@/features/disease-statistics/api/diseaseApi";
import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./appSlice";

export const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
    [diseaseApi.reducerPath]: diseaseApi.reducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(diseaseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
