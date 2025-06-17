import { createAsyncThunk } from "@reduxjs/toolkit";

import { IUser } from "./types";

import { requestWithAuth } from "../../shared/api/requestWithAuth";
import { url } from "../../shared/config/config";

export const fetchUser = createAsyncThunk(
	"user/fetchUser",
	async (_, thunkAPI) => {
		try {
			const response = await requestWithAuth<IUser>({
				method: "GET",
				url: `${url}/me/profile`,
			});

			return response;
		} catch (error: any) {
			return thunkAPI.rejectWithValue([
				error.response.status,
				error.message,
			]);
		}
	}
);
