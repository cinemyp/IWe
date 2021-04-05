import { configureStore } from "@reduxjs/toolkit";
import currentProfileReducer from "./profiles/currentProfile";
import profilesReducer from "./profiles/profiles";

export default configureStore({
  reducer: {
    currentProfile: currentProfileReducer,
    profiles: profilesReducer,
  },
});
