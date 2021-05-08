import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../services/API";

export const slice = createSlice({
  name: "currentDialog",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },
  reducers: {
    fetchCurrentDialog: (state) => ({
      ...state,
      isLoading: true,
    }),
    fetchCurrentDialogResolve: (state, action) => ({
      ...state,
      isLoading: false,
      data: action.payload,
    }),
    fetchCurrentDialogReject: (state, action) => ({
      ...state,
      isLoading: false,
      data: {},
      error: action.payload,
    }),
    setConversationId: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    setEmpty: (state) => ({
      ...state,
      isLoading: false,
      data: {},
      error: null,
    }),
  },
});

export const {
  fetchCurrentDialog,
  fetchCurrentDialogResolve,
  fetchCurrentDialogReject,
  setConversationId,
  setEmpty,
} = slice.actions;

export const selectCurrentDialogLoading = (state) =>
  state.currentDialog.isLoading;

export const selectCurrentDialogData = (state) => state.currentDialog.data;

export const selectCurrentDialogDataId = (state) => state.currentDialog.data.id;

export const selectCurrentDialogError = (state) => state.currentDialog.error;

export const openDialogAsync = (conversationId) => async (dispatch) => {
  console.log(conversationId);
  dispatch(fetchCurrentDialog());
  axiosInstance({
    url: "/api/chat/open",
    method: "post",
    headers: { Authorization: "Bearer " + sessionStorage.getItem("idToken") },
    data: { conversationId: conversationId },
  })
    .then((response) => {
      dispatch(fetchCurrentDialogResolve(response.data));
    })
    .catch((error) => {
      if (error.response) {
        dispatch(fetchCurrentDialogReject(error.response.status));
      } else if (error.request) {
        dispatch(fetchCurrentDialogReject(error.request.status));
      } else {
        dispatch(fetchCurrentDialogReject(error.message));
      }
    });
};

export default slice.reducer;
