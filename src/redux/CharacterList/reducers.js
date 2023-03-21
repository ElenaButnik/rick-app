import { createSlice } from "@reduxjs/toolkit";
import { getThunkData } from "./thunks";

export const characterListSlice = createSlice({
  name: "characterList",
  initialState: {
    characters: [],
    totalItems: 0,
    page: 1,
    loading: false,
    error: null,
  },
  /*reducers: {
    setCurrentPage: (state, action) => {
      state.page = action.payload;
    },
  },*/

  extraReducers: {
    [getThunkData.pending]: (state) => {
      state.loading = true;
    },

    [getThunkData.fulfilled]: (state, action) => {
      state.characters = action.payload.results;
      state.page = action.payload.page;
      state.loading = false;
    },

    [getThunkData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default characterListSlice.reducer;

export const { setCurrentPage } = characterListSlice.actions;
