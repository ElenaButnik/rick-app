import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchCharacterById } from "../../services/API";

export const getThunkDataItem = createAsyncThunk(
  "getCharacterItem",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await FetchCharacterById(id);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
