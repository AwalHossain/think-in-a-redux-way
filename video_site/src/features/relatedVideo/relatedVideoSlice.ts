// slice

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TagsProps } from "../../components/list/RelatedVideo";
import { getRelatedVideo } from "./relatedAPI";

interface VideoState {
  relatedVideo: [];
  status: "idle" | "loading" | "failed";
  isError: boolean;
  error: string | null;
}

const inititalState: VideoState = {
  relatedVideo: [],
  status: "idle",
  isError: false,
  error: null,
};

export const fetchRelatedVideo = createAsyncThunk(
  "relaVideo/fetchRelatedVideo",
  async ({ currentVideoId, tags }: TagsProps) => {
    const video = await getRelatedVideo(currentVideoId, tags);
    return video;
  }
);

const relatedVideoSlice = createSlice({
  name: "relatedVideo",
  initialState: inititalState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideo.pending, (state) => {
        state.isError = false;
        state.status = "loading";
      })
      .addCase(fetchRelatedVideo.fulfilled, (state, action) => {
        state.status = "idle";
        state.relatedVideo = action.payload;
      })
      .addCase(fetchRelatedVideo.rejected, (state, action) => {
        state.status = "failed";
        state.relatedVideo = [];
        state.isError = true;
        state.error = action.error?.message ?? null;
      });
  },
});

export default relatedVideoSlice.reducer;
