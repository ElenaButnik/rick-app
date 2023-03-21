import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchPages } from "../../services/API";

export const getThunkDataPage = createAsyncThunk(
  "getPage",
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await FetchPages(page);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
