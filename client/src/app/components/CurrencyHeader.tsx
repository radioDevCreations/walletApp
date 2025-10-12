interface CurrencyHeaderProps {
	pair: string;
	value: string;
	change: string;
	changePercent: string;
}

const CurrencyHeader = ({
	pair,
	value,
	change,
	changePercent,
}: CurrencyHeaderProps) => {
	return (
		<div className="mb-4 sm:mb-0">
			<h2 className="text-2xl font-bold text-gray-800">{pair}</h2>
			<p className="text-xl font-semibold text-green-600">
				{value}{" "}
				<span className="text-sm">
					{change} ({changePercent})
				</span>
			</p>
		</div>
	);
};

export default CurrencyHeader;
