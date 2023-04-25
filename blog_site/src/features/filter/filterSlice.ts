// blog redux slice

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLikes } from "./filterAPI";

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

export const fetchLikes = createAsyncThunk(
  "",
  async ({ id, likes }: { id: number; likes: number }) => {
    const res = await getLikes(id, likes);
    return res;
  }
);

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLikes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLikes.fulfilled, (state, action) => {
        state.status = "idle";
        state.likes = action.payload;
      })
      .addCase(fetchLikes.rejected, (state, action) => {
        state.status = "failed";
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default filterSlice.reducer;
