import { configureStore } from "@reduxjs/toolkit";
import { load, save } from "redux-localstorage-simple";

// Reducers
import appReducer from "./app/reducer";
import swapReducer from "./swap/reducer";
import listsReducer from "./lists/reducer";
import connectionReducer from "./connection/reducer";
import userReducer from "./user/reducer";

import { isTestEnv, isServer } from "utils/env";

const PERSISTED_KEYS: string[] = ["user", "lists"];

export const store = configureStore({
	reducer: {
		app: appReducer,
		swap: swapReducer,
		lists: listsReducer,
		connection: connectionReducer,
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ thunk: true }).concat(
			save({ states: PERSISTED_KEYS, debounce: 1000 })
		),
	preloadedState: isServer()
		? {}
		: load({
				states: PERSISTED_KEYS,
				disableWarnings: isTestEnv(),
		  }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
