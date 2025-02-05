import store from "./app/store.js";
import { fetchVideos } from "./Features/videoSlice.js";

store.subscribe(() => {});

store.dispatch(fetchVideos());
