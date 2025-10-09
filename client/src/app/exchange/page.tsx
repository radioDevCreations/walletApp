export default function ChartsPage() {
	return (
		<main className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
			<div className="max-w-7xl mx-auto">
				<nav className="flex justify-center mb-10">
					<div className="bg-white shadow-sm rounded-full p-2 flex space-x-2">
						<a
							href="#"
							className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold"
						>
							Dashboard
						</a>
						<a
							href="#"
							className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
						>
							Wykresy
						</a>
						<a
							href="#"
							className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold"
						>
							Wymiana
						</a>
						<a
							href="#"
							className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold"
						>
							Profil
						</a>
					</div>
				</nav>

				<div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
					<div className="flex flex-wrap justify-between items-center mb-4">
						<div className="mb-4 sm:mb-0">
							<h2 className="text-2xl font-bold text-gray-800">EUR / PLN</h2>
							<p className="text-xl font-semibold text-green-600">
								4.3120 <span className="text-sm">+0.0025 (0.06%)</span>
							</p>
						</div>
						<div className="flex items-center space-x-2 text-sm">
							<button className="bg-gray-200 px-3 py-1 rounded-md font-medium">
								1H
							</button>
							<button className="bg-blue-500 text-white px-3 py-1 rounded-md font-medium">
								1D
							</button>
							<button className="bg-gray-200 px-3 py-1 rounded-md font-medium">
								7D
							</button>
							<button className="bg-gray-200 px-3 py-1 rounded-md font-medium">
								1M
							</button>
						</div>
					</div>

					<div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
						<p className="text-gray-400">Miejsce na interaktywny wykres</p>
					</div>
				</div>
			</div>
		</main>
	);
}
