// slice

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./videoAPI";

export interface VideoProps {
  _id: string;
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  author: string;
  avatar: string;
  views: number;
  link: string;
  likes: number;
  unlikes: number;
  tags: string[];
  duration: string;
  date: string;
}

export interface VideoState {
  video: VideoProps;
  status: "idle" | "loading" | "failed";
  isError: boolean;
  error: string | null;
}

const obj = {
  _id: "",
  id: "",
  title: "",
  description: "",
  thumbnail: "",
  author: "",
  avatar: "",
  views: 0,
  link: "",
  likes: 0,
  unlikes: 0,
  tags: [],
  duration: "",
  date: "",
};

const inititalState: VideoState = {
  video: obj,
  status: "idle",
  isError: false,
  error: null,
};

export const fetchVideo = createAsyncThunk(
  "video/fetchVideo",
  async (id: string | undefined) => {
    const video = await getVideo(id);
    return video;
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState: inititalState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isError = false;
        state.status = "loading";
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.status = "idle";
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.status = "failed";
        state.video = obj;
        state.isError = true;
        state.error = action.error?.message ?? null;
      });
  },
});

export default videoSlice.reducer;
