import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Existing fetchPosts thunk
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("http://127.0.0.1:4000/api/posts");
  return response.json();
});

// New thunk for submitting feedback
export const submitFeedbackAPI = createAsyncThunk(
  "posts/submitFeedbackAPI",
  async ({ postId, feedback }) => {
    const response = await fetch(`http://127.0.0.1:4000/api/posts/${postId}/feedback`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ feedback }), // Send feedback in body
    });
    return response.json(); // Return updated post
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {
    // Existing submitFeedback reducer
    submitFeedback: (state, action) => {
      const post = state.posts.find((p) => p._id === action.payload.postId);
      if (!post) return;
      post.feedback = post.feedback || [];
      post.feedback.push(action.payload.feedback);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(submitFeedbackAPI.fulfilled, (state, action) => {
        const updatedPost = action.payload;
        const index = state.posts.findIndex((p) => p._id === updatedPost._id);
        if (index !== -1) {
          state.posts[index] = updatedPost; // Update the post in state
        }
      });
  },
});

export const { submitFeedback } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts.posts;

export default postsSlice.reducer;
