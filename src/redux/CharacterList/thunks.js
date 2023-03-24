import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchCharacters } from "../../services/API";

export const getThunkData = createAsyncThunk(
  "getCharacterList",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await FetchCharacters(params);
      return data;
    } catch (error) {
      alert("We can't fetch characters with such name");
      return rejectWithValue(error);
    }
  }
);
