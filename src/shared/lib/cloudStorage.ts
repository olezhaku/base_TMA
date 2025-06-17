import { tg } from "../config/config";

export async function getItem(key: string): Promise<string> {
	return await new Promise((resolve, reject) => {
		tg.CloudStorage.getItem(key, (error: string, value: string) => {
			if (error) reject(error);
			else resolve(value);
		});
	});
}

export async function setItem(key: string, value: string): Promise<void> {
	return await new Promise((resolve, reject) => {
		tg.CloudStorage.setItem(key, value, (error: string) => {
			if (error) reject(error);
			else resolve();
		});
	});
}

export async function removeItem(key: string): Promise<void> {
	return await new Promise((resolve, reject) => {
		tg.CloudStorage.removeItem(key, (error: string) => {
			if (error) reject(error);
			else resolve();
		});
	});
}
