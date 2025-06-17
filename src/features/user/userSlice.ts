import { createSlice } from "@reduxjs/toolkit";

import { IUser } from "./types";

import { fetchUser } from "./fetchUser";

interface UserState {
	data: IUser | null;
	isLoading: boolean;
	error: string[];
}

const initialState: UserState = {
	data: null,
	isLoading: false,
	error: [],
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = [];
				state.data = action.payload;
			})
			.addCase(fetchUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string[];
			});
	},
});

export default userSlice.reducer;
