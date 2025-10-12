"use client";

import { useState } from "react";
import ChartPlaceholder from "../components/CurrencyChart";
import CurrencyHeader from "../components/CurrencyHeader";
import NavBar from "../components/NavBar";
import TimeRangeSelector from "../components/TimeRangeSelector";

const ChartsPage = () => {
	const [activeRange, setActiveRange] = useState("1D");

	return (
		<main className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
			<div className="max-w-7xl mx-auto">
				<NavBar />

				<div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
					<div className="flex flex-wrap justify-between items-center mb-4">
						<CurrencyHeader
							pair="EUR / PLN"
							value="4.3120"
							change="+0.0025"
							changePercent="0.06%"
						/>
						<TimeRangeSelector
							activeRange={activeRange}
							onSelectRange={setActiveRange}
						/>
					</div>

					<ChartPlaceholder />
				</div>
			</div>
		</main>
	);
};

export default ChartsPage;
