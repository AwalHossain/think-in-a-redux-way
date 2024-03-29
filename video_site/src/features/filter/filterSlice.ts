// slice

import { createSlice } from "@reduxjs/toolkit";

export interface FilterState {
  search: string;
  tags: string[];
  status: "idle" | "loading" | "failed";
  isError: boolean;
  error: string | null;
}

const inititalState: FilterState = {
  search: "",
  tags: [],
  status: "idle",
  isError: false,
  error: null,
};

const videoSlice = createSlice({
  name: "video",
  initialState: inititalState,
  reducers: {
    tagsSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.findIndex(
        (tag) => tag === action.payload
      );
      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default videoSlice.reducer;
export const { tagsSelected, tagRemoved, searched } = videoSlice.actions;
