import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../services/API";

export const slice = createSlice({
  name: "profiles",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  reducers: {
    fetchProfiles: (state) => ({
      ...state,
      isLoading: true,
    }),
    fetchProfilesResolve: (state, action) => ({
      ...state,
      isLoading: false,
      data: action.payload,
    }),
    fetchProfilesReject: (state, action) => ({
      ...state,
      isLoading: false,
      data: {},
      error: action.payload,
    }),
  },
});
export const {
  fetchProfiles,
  fetchProfilesResolve,
  fetchProfilesReject,
} = slice.actions;

export const selectProfilesLoading = (state) => state.profiles.isLoading;

export const selectProfilesData = (state) => state.profiles.data;

export const getProfilesAsync = () => async (dispatch) => {
  dispatch(fetchProfiles());
  axiosInstance
    .get()
    .then((response) => {
      dispatch(fetchProfilesResolve(response.data));
    })
    .catch((error) => {
      dispatch(fetchProfilesReject(error.message));
    });
};

export default slice.reducer;
