import { Filter, FilterValue, LoadingStatus } from "@/common/types";
import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    filter: { filter: { default: "idle" } } as Filter,
    loadingStatus: "idle" as LoadingStatus,
    error: null as string | null,
  },
  selectors: {
    selectFilter: state => state.filter,
    selectLoadingStatus: state => state.loadingStatus,
    selectError: state => state.error,
  },
  reducers: create => ({
    setFilter: create.reducer<Filter>((state, action) => {
      state.filter.filter = action.payload.filter
    }),
    setLoadingStatus: create.reducer<{ loadingStatus: LoadingStatus }>((state, action) => {
      state.loadingStatus = action.payload.loadingStatus;
    }),
    setErrorMessage: create.reducer<{ error: string | null }>((state, action) => {
      state.error = action.payload.error;
    }),
  }),
});

export const { selectError, selectLoadingStatus, selectFilter } = appSlice.selectors;
export const { setLoadingStatus, setErrorMessage, setFilter } = appSlice.actions;
