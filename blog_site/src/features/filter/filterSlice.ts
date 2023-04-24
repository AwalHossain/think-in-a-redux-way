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

const filterSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    likeBlog: (state, action) => {
      state.likes += action.payload;
    },
    saveBlog: (state, action) => {
      //toggle isSaved
      state.isSaved = !state.isSaved;
    },
  },
});

export default filterSlice.reducer;
export const { likeBlog, saveBlog } = filterSlice.actions;
