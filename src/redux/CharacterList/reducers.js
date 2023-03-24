import { createSlice } from "@reduxjs/toolkit";
import { getThunkData } from "./thunks";

export const characterListSlice = createSlice({
  name: "characterList",
  initialState: {
    characters: [],
    filter: { name: "" },
    totalItems: 0,
    page: 1,
    loading: false,
    error: null,
  },
  reducers: {
    setFilterByName: (state, action) => {
      state.filter.name = action.payload;
    },
    setNextPage: (state, action) => {
      state.page = action.payload;
    },
    /* prepare: (payload) => {
      return {
        payload: payload.sort((a, b) =>
          a.filter.name > b.filter.name ? 1 : -1
        ),
      };
    },*/
  },

  extraReducers: (builder) => {
    builder
      .addCase(getThunkData.pending, (state) => {
        state.loading = true;
      })

      .addCase(getThunkData.fulfilled, (state, action) => {
        state.characters = action.payload.results;
        state.page = action.payload;
        state.loading = false;
      })

      .addCase(getThunkData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default characterListSlice.reducer;

export const { setFilterByName, setNextPage } = characterListSlice.actions;
