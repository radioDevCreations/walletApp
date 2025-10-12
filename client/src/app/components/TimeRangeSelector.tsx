interface TimeRangeSelectorProps {
	activeRange: string;
	onSelectRange?: (range: string) => void;
}

const TimeRangeSelector = ({
	activeRange,
	onSelectRange,
}: TimeRangeSelectorProps) => {
	const ranges = ["1H", "1D", "7D", "1M"];

	return (
		<div className="flex items-center space-x-2 text-sm">
			{ranges.map((range) => (
				<button
					key={range}
					onClick={() => onSelectRange?.(range)}
					className={`px-3 py-1 rounded-md font-medium ${
						activeRange === range
							? "bg-blue-500 text-white"
							: "bg-gray-200 text-gray-800"
					}`}
				>
					{range}
				</button>
			))}
		</div>
	);
};

export default TimeRangeSelector;
