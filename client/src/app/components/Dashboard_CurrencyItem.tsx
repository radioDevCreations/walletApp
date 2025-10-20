// CurrencyItem.tsx
interface Dashboard_CurrencyItemProps {
	flag: string;
	code: string;
	name: string;
	amount: string;
	value: string;
}

const Dashboard_CurrencyItem = ({
	flag,
	code,
	name,
	amount,
	value,
}: Dashboard_CurrencyItemProps) => (
	<div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
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
);

export default Dashboard_CurrencyItem;
