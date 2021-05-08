import { configureStore } from "@reduxjs/toolkit";
import currentProfileReducer from "./profiles/currentProfile";
import profilesReducer from "./profiles/profiles";
import dialogReducer from "./dialog/dialog";

export default configureStore({
  reducer: {
    currentProfile: currentProfileReducer,
    profiles: profilesReducer,
    currentDialog: dialogReducer,
  },
});
