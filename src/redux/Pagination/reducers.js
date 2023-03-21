import { createSlice } from "@reduxjs/toolkit";
import { getThunkDataPage } from "./thunks";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    pages: "",
    loading: false,
    error: null,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.page = action.payload;
    },
  },

  extraReducers: {
    [getThunkDataPage.pending]: (state) => {
      state.loading = true;
    },

    [getThunkDataPage.fulfilled]: (state, action) => {
      state.pages = action.payload.info.pages;
    },

    [getThunkDataPage.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default pageSlice.reducer;
export const { setCurrentPage } = pageSlice.actions;
