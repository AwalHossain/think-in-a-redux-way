// blog redux slice

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "./blogsAPI";

export interface BlogProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  likes: number;
  isSaved: boolean;
  createdAt: string;
}

export interface BlogsState {
  blogs: BlogProps[];
  status: "idle" | "loading" | "failed";
}

const initialState: BlogsState = {
  blogs: [],
  status: "idle",
};

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const res = await getBlogs();
  return res;
});

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "idle";
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.blogs = [];
      });
  },
});

export default blogsSlice.reducer;
