const Dashboard_QuickActions = () => (
	<div className="bg-white p-6 rounded-xl shadow-sm">
		<h3 className="font-semibold mb-4">Szybkie akcje</h3>
		<div className="space-y-3">
			<button className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600">
				Wymień walutę
			</button>
			<button className="w-full bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-300">
				Wpłać środki
			</button>
		</div>
	</div>
);

export default Dashboard_QuickActions;
