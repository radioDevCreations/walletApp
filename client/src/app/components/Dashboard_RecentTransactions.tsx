const Dashboard_RecentTransactions = () => {
	const transactions = [
		{
			label: "Wymiana USD na PLN",
			amount: "+400.00 PLN",
			color: "text-green-600",
		},
		{ label: "Zakup EUR", amount: "-2,150.00 PLN", color: "text-red-600" },
	];

	return (
		<div className="bg-white p-6 rounded-xl shadow-sm">
			<h3 className="font-semibold mb-4">Ostatnie transakcje</h3>
			<ul className="space-y-3">
				{transactions.map(({ label, amount, color }, i) => (
					<li key={i} className="flex justify-between text-sm">
						<span>{label}</span>
						<span className={`font-medium ${color}`}>{amount}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Dashboard_RecentTransactions;
