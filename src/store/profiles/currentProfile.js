import { createSlice } from "@reduxjs/toolkit";

const MAX_USERS = 6;

export const slice = createSlice({
  name: "currentProfile",
  initialState: {
    value: 0,
  },
  reducers: {
    changeProfile: (state) => ({
      ...state,
      value: state.value === MAX_USERS ? 0 : state.value + 1,
    }),
  },
});

export const { changeProfile } = slice.actions;

export const selectCurrentProfile = (state) => state.currentProfile.value;

export default slice.reducer;
