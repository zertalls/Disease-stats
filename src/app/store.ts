import { diseaseApi } from "@/features/disease-statistics/api/diseaseApi";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [diseaseApi.reducerPath]: diseaseApi.reducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(diseaseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
