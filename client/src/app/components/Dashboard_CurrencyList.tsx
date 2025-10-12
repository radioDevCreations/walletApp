const Dashboard_CurrencyList = () => {
	const currencies = [
		{
			flag: "🇪🇺",
			code: "EUR",
			name: "Euro",
			amount: "2,500.00 EUR",
			value: "10,750.00 PLN",
		},
		{
			flag: "🇺🇸",
			code: "USD",
			name: "Dolar amerykański",
			amount: "1,020.00 USD",
			value: "4,072.50 PLN",
		},
	];

	return (
		<div>
			<h3 className="text-lg font-semibold text-gray-800 mb-4">Moje Waluty</h3>
			<div className="space-y-4">
				{currencies.map(({ flag, code, name, amount, value }) => (
					<div
						key={code}
						className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between"
					>
						<div className="flex items-center space-x-4">
							<span className="text-2xl">{flag}</span>
							<div>
								<p className="font-bold text-gray-800">{code}</p>
								<p className="text-sm text-gray-500">{name}</p>
							</div>
						</div>
						<div>
							<p className="font-semibold text-gray-800 text-right">{amount}</p>
							<p className="text-sm text-gray-500 text-right">{value}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Dashboard_CurrencyList;
