import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDecorator } from '@storybook/react';

import postsService from './postsService';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (thunkAPI) => {
    return await postsService.get();
  }
);

export const fetchPostsFromFirebase = createAsyncThunk(
  'posts/fetchPosts',
  async (thunkAPI) => {
    return await postsService.getFromFirebase();
  }
);

export const postAPost = createAsyncThunk(
  'posts/postAPost',
  async (post, thunkAPI) => {
    return await postsService.post(post);
  }
);

export const removePost = createAsyncThunk(
  'posts/removePost',
  async (id, thunkAPI) => {
    return await postsService.delete(id);
  }
);

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async (post, thunkAPI) => {
    return await postsService.update(post);
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(postAPost.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(removePost.fulfilled, (state, action) => {
        console.log('payload', action.payload);
        state.list = state.list.filter((post) => post.id !== action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        console.log('payload', action.payload);
        state.list = state.list.map((post) => {
          if (post.id === action.payload.id) {
            return action.payload;
          }
          return post;
        });
      });
  },
});

export default postsSlice.reducer;