// slice

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosAPI";



export type Video = {
    _id: string;
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

export interface VideosResponse {
  data: Video[];
  meta: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
  };
}

;
export interface VideosState {
  videos: Video[];
  status: "idle" | "loading" | "failed";
  isError: boolean;
  error: string | null;
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface FilterProps {
  tags: string[];
  search: string;
  page: number;
  pageSize: number;
}

const inititalState: VideosState = {
  videos: [],
  status: "idle",
  isError: false,
  error: null,
  meta: {
    page: 1,
    limit: 5,
    total: 0,
    totalPages: 0,
  },

};

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async ({ tags, search, page, pageSize }: FilterProps) => {
    const videos = await getVideos({ tags, search, page, pageSize });
    return videos;
  }
);

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
        const {data, meta} = action.payload;
        state.videos = data;
        state.meta = meta;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.status = "failed";
        state.isError = true;
        state.error = action.error?.message ?? null;
      });
  },
});

export default videosSlice.reducer;
