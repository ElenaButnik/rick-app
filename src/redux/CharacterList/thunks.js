import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchCharacters } from "../../services/API";

export const getThunkData = createAsyncThunk(
  "getCharacterList",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await FetchCharacters();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
