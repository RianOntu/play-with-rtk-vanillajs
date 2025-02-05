const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
const { default: fetch } = require("node-fetch");

const initialState = {
  loading: false,
  videos: [],
  error: "",
};

const fetchVideos = createAsyncThunk("video/fetchVideos", async () => {
  const response = await fetch(`http://localhost:9000/videos`);
  const videos = await response.json();
  return videos;
});

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.pending, (state, action) => {
      (state.loading = true), (state.videos = []), (state.error = "");
    });
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      (state.loading = false),
        (state.videos = action.payload),
        (state.error = "");
    });
    builder.addCase(fetchVideos.rejected, (state, action) => {
      (state.loading = false),
        (state.videos = []),
        (state.error = action.error.message);
    });
  },
});

export default videoSlice.reducer;
export const videoActions = videoSlice.actions;
