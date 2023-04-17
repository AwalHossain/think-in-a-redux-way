import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import videosSlice from "../features/videos/videosSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    videos: videosSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
