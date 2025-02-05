import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetch from "node-fetch";

const initialState = {
  loading: false,
  videos: [],
  error: "",
};

export const fetchVideosByTags = createAsyncThunk(
  "video/fetchVideosByTags",
  async (tag_one, tag_two) => {
    const response = await fetch(
      `http://localhost:9000/videos?tags_like=${tag_one}&tags_like=${tag_two}`
    );
    const videos = await response.json();
    return videos;
  }
);

const videoByTagsSlice = createSlice({
  name: "videos_by_tags",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchVideosByTags.pending, (state, action) => {
      (state.loading = true), (state.videos = []), (state.error = "");
    });
    builder.addCase(fetchVideosByTags.fulfilled, (state, action) => {
      (state.loading = false),
        (state.videos = action.payload),
        (state.error = "");
    });
    builder.addCase(fetchVideosByTags.rejected, (state, action) => {
      (state.loading = false),
        (state.videos = []),
        (state.error = action.error.message);
    });
  },
});

export default videoByTagsSlice.reducer;
export const videoByTagActions = videoByTagsSlice.actions;
