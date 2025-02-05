import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../Features/videoSlice.js";
import pkg from "redux-logger";
const { createLogger } = pkg;

const logger = createLogger();

const store = configureStore({
  reducer: videoReducer,
  middleware: (getDefaultMiddlewares) => {
    return getDefaultMiddlewares().concat(logger);
  },
});

export default store;
