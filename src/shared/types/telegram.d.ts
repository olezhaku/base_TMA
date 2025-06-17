import type { TelegramWebApp } from "@twa-dev/types";

declare global {
	interface Window {
		Telegram?: {
			WebApp: TelegramWebApp
		};
	}
}

export {}