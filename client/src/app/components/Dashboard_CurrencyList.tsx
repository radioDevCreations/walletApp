// CurrencyList.tsx
import Dashboard_CurrencyItem from "./Dashboard_CurrencyItem";
import currenciesMap from "../utils/currencyMap"; // path to your currenciesMap
import { CurrencyCode } from "../models/CurrencyCode";

// Example user balances (in their native currency)
const userBalances: Partial<Record<CurrencyCode, number>> = {
	[CurrencyCode.EUR]: 2500,
	[CurrencyCode.USD]: 1020,
	[CurrencyCode.GBP]: 500,
	[CurrencyCode.JPY]: 100000,
	[CurrencyCode.CHF]: 300,
};

const CurrencyList = () => {
	return (
		<div className="space-y-4">
			{Object.entries(userBalances).map(([code, amount]) => {
				const currency = currenciesMap[code as CurrencyCode];

				// Calculate PLN value based on USD rate and example USD/PLN rate
				const USD_TO_PLN = 4.3; // example static conversion rate
				const valueInPLN = amount * (currency.rateToUSD || 0) * USD_TO_PLN;

				return (
					<Dashboard_CurrencyItem
						key={currency.code}
						flag={currency.flag as string}
						code={currency.code}
						name={currency.name}
						amount={`${amount.toLocaleString()} ${currency.code}`}
						value={`${valueInPLN.toLocaleString(undefined, {
							minimumFractionDigits: 2,
							maximumFractionDigits: 2,
						})} PLN`}
					/>
				);
			})}
		</div>
	);
};

export default CurrencyList;
