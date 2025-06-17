import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "../../features/user/userSlice";

const rootReducer = combineReducers({ userReducer });

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
