import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../Features/videoSlice.js";
import videoByTagsReducer from "../Features/videoByTagsSlice.js";
import pkg from "redux-logger";
const { createLogger } = pkg;

const logger = createLogger();

const store = configureStore({
  reducer: {
    video: videoReducer,
    video_by_tags: videoByTagsReducer,
  },
  middleware: (getDefaultMiddlewares) => {
    return getDefaultMiddlewares().concat(logger);
  },
});

export default store;
