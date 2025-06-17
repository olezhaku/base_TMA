import axios from "axios";

import { IAuth } from "./types";

import { getItem, removeItem, setItem } from "../lib/cloudStorage";
import { tg, url } from "../config/config";

export async function fetchJWT() {
	try {
		const refresh = await getItem("refresh");
		let response;

		if (refresh) {
			response = await axios.post<IAuth>(`${url}/auth/refresh`, {
				RefreshToken: refresh,
			});
		} else {
			response = await axios.post<IAuth>(`${url}/auth/get_tokens`, {
				QueryParams: tg.initData,
			});
		}

		if (response.data.Asset && response.data.Refresh) {
			await setItem("asset", response.data.Asset);
			await setItem("refresh", response.data.Refresh);
		}

		return true;
	} catch (error: any) {
		if (error?.response?.status === 401) {
			await removeItem("refresh");
			await removeItem("asset");

			await fetchJWT();
			return true;
		}

		throw error;
	}
}
