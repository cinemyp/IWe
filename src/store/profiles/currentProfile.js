import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../services/API";

export const slice = createSlice({
  name: "currentProfile",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },
  reducers: {
    fetchCurrentProfile: (state) => ({
      ...state,
      isLoading: true,
    }),
    fetchCurrentProfileResolve: (state, action) => ({
      ...state,
      isLoading: false,
      data: action.payload,
    }),
    fetchCurrentProfileReject: (state, action) => ({
      ...state,
      isLoading: false,
      data: {},
      error: action.payload,
    }),
    logout: (state) => ({
      ...state,
      data: {},
      error: null,
    }),
  },
});

export const {
  fetchCurrentProfile,
  fetchCurrentProfileResolve,
  fetchCurrentProfileReject,
  logout,
} = slice.actions;

export const selectCurrentProfileLoading = (state) =>
  state.currentProfile.isLoading;

export const selectCurrentProfileData = (state) => state.currentProfile.data;

export const selectCurrentProfileDataId = (state) =>
  state.currentProfile.data.id;

export const selectCurrentProfileError = (state) => state.currentProfile.error;

export const getCurrentProfileAsync = () => async (dispatch) => {
  dispatch(fetchCurrentProfile());
  axiosInstance
    .get("/api/profile/current/", {
      headers: { Authorization: "Bearer " + sessionStorage.getItem("idToken") },
    })
    .then((response) => {
      dispatch(fetchCurrentProfileResolve(response.data));
      console.log("Current profile");
    })
    .catch((error) => {
      if (error.response) {
        dispatch(fetchCurrentProfileReject(error.response.status));
      } else if (error.request) {
        dispatch(fetchCurrentProfileReject(error.request.status));
      } else {
        dispatch(fetchCurrentProfileReject(error.message));
      }
    });
};

export default slice.reducer;
