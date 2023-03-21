import { createSlice } from "@reduxjs/toolkit";
import { getThunkDataItem } from "./thunks";

export const itemSlice = createSlice({
  name: "item",
  initialState: {
    item: {},
    loading: false,
    error: null,
  },

  extraReducers: {
    [getThunkDataItem.pending]: (state) => {
      state.loading = true;
    },

    [getThunkDataItem.fulfilled]: (state, action) => {
      state.item = action.payload;
      state.loading = false;
    },

    [getThunkDataItem.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default itemSlice.reducer;
