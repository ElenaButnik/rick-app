import { createSlice } from "@reduxjs/toolkit";
import { getThunkDataItem } from "./thunks";

export const itemSlice = createSlice({
  name: "item",
  initialState: {
    item: {},
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getThunkDataItem.pending, (state) => {
        state.loading = true;
      })

      .addCase(getThunkDataItem.fulfilled, (state, action) => {
        state.item = action.payload;
        state.loading = false;
      })

      .addCase(getThunkDataItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default itemSlice.reducer;
