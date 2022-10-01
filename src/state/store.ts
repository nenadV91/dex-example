import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app/reducer";
import swapReducer from "./swap/reducer";
import listsReducer from "./lists/reducer";
import connectionReducer from "./connection/reducer";

export const store = configureStore({
	reducer: {
		app: appReducer,
		swap: swapReducer,
		lists: listsReducer,
		connection: connectionReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
