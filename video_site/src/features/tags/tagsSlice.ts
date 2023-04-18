// slice

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./tagsAPI";

export interface VideosState {
  tags: [];
  status: "idle" | "loading" | "failed";
  isError: boolean;
  error: string | null;
}

const inititalState: VideosState = {
  tags: [],
  status: "idle",
  isError: false,
  error: null,
};

export const fetchTags = createAsyncThunk("tags/fetchVideos", async () => {
  const tags = await getTags();
  return tags;
});

const tagsSlice = createSlice({
  name: "tags",
  initialState: inititalState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.isError = false;
        state.status = "loading";
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.status = "idle";
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.status = "failed";
        state.isError = true;
        state.error = action.error?.message ?? null;
      });
  },
});

export default tagsSlice.reducer;
