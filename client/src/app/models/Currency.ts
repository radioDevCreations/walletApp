import { CurrencyCode } from "./CurrencyCode";

interface Currency {
	code: CurrencyCode; // 3-letter currency code, e.g., "USD", "EUR"
	name: string; // full currency name, e.g., "Euro"
	rateToUSD: number; // exchange rate relative to USD (base currency)
	symbol?: string; // currency symbol, e.g., "€", "$", "zł"
	decimals?: number; // number of decimal places to display (optional)
	country?: string; // country or region of the currency (optional)
	flag?: string; // emoji or URL for country flag (optional)
	isCrypto?: boolean; // whether this is a cryptocurrency (optional)
	historicalRates?: Record<string, number>; // optional historical rates
}

export default Currency;
