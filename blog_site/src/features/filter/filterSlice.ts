// blog redux slice

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFilterTags } from "./filterAPI";

export interface FilterState {
  isSaved: boolean;
  likes: number;
  status: "idle" | "loading" | "failed";
  isError: boolean;
  error?: string | null;
}

const initialState: FilterState = {
  isSaved: false,
  isError: false,
  likes: 0,
  status: "idle",
};

export const fetchFilter = createAsyncThunk("", async () => {
  const res = await getFilterTags();
  return res;
});

const blogsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilter.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchFilter.fulfilled, (state, action) => {
        state.status = "idle";
        state.isSaved = true;
        state.likes = action.payload.likes;
      })
      .addCase(fetchFilter.rejected, (state, action) => {
        state.status = "failed";
        state.isSaved = false;
        state.error = action.error.message ?? null;
      });
  },
});

export default blogsSlice.reducer;
