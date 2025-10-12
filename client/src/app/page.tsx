"use client";

import NavBar from "./components/NavBar";
import Dashboard_PortfolioValue from "./components/Dashboard_PortfolioValue";
import Dashboard_CurrencyList from "./components/Dashboard_CurrencyList";
import Dashboard_QuickActions from "./components/Dashboard_QuickActions";
import Dashboard_RecentTransactions from "./components/Dashboard_RecentTransactions";

const Home = () => {
	return (
		<main className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
			<div className="max-w-7xl mx-auto">
				<NavBar />

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2 space-y-8">
						<Dashboard_PortfolioValue />
						<Dashboard_CurrencyList />
					</div>

					<div className="lg:col-span-1 space-y-6">
						<Dashboard_QuickActions />
						<Dashboard_RecentTransactions />
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
