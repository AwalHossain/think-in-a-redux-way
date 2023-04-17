// slice

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosAPI";

export interface VideosState {
  videos: [];
  status: "idle" | "loading" | "failed";
  isError: boolean;
  error: string | null;
}

const inititalState: VideosState = {
  videos: [],
  status: "idle",
  isError: false,
  error: null,
};

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const videos = await getVideos();
  return videos;
});

const videosSlice = createSlice({
  name: "videos",
  initialState: inititalState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isError = false;
        state.status = "loading";
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.status = "idle";
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.status = "failed";
        state.isError = true;
        state.error = action.error?.message ?? null;
      });
  },
});

export default videosSlice.reducer;
