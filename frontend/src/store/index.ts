import {configureStore} from '@reduxjs/toolkit'
import {shopApi} from "./api/shopApi";

export const store = configureStore({
  reducer: {
    [shopApi.reducerPath]: shopApi.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch