import { LoadingStatus } from "@/common/types";
import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    loadingStatus: "idle" as LoadingStatus,
    error: null as string | null,
  },
  selectors: {
    selectLoadingStatus: state => state.loadingStatus,
    selectError: state => state.error,
  },
  reducers: create => ({
    setLoadingStatus: create.reducer<{ loadingStatus: LoadingStatus }>((state, action) => {
      state.loadingStatus = action.payload.loadingStatus;
    }),
    setErrorMessage: create.reducer<{ error: string | null }>((state, action) => {
      state.error = action.payload.error;
    }),
  }),  
});

export const {selectError, selectLoadingStatus} = appSlice.selectors
export const {setLoadingStatus, setErrorMessage} = appSlice.actions

