import store from "./app/store.js";
import { fetchVideosByTags } from "./Features/videoByTagsSlice.js";
import { fetchVideos } from "./Features/videoSlice.js";

store.subscribe(() => {
  console.log("state from store" + store.getState().video.videos);
  console.log("state 2 from store" + store.getState().video_by_tags.videos);
});

store.dispatch(fetchVideos());
store.dispatch(fetchVideosByTags("javascript", "react"));
