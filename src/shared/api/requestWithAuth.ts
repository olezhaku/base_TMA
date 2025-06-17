import axios, { AxiosRequestConfig } from "axios";

import { getItem } from "../lib/cloudStorage";
import { fetchJWT } from "./fetchJWT";

export async function requestWithAuth<T = any>(
	config: AxiosRequestConfig
): Promise<T> {
	try {
		const asset = await getItem("asset");

		const finalConfig = {
			...config,
			headers: {
				...(config.headers || {}),
				authorization: `Bearer ${asset}`,
			},
		};

		const response = await axios(finalConfig);

		return response.data;
	} catch (error: any) {
		const status = error?.response?.status;

		if (status === 401) {
			await fetchJWT();
			return requestWithAuth(config);
		} else {
			console.error(error);
			throw error;
		}
	}
}
