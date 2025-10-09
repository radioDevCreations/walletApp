export default function Home() {
	return (
		<main className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
			<div className="max-w-7xl mx-auto">
				<nav className="flex justify-center mb-10">
					<div className="bg-white shadow-sm rounded-full p-2 flex space-x-2">
						<a
							href="#"
							className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
						>
							Dashboard
						</a>
						<a
							href="#"
							className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold"
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

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2 space-y-8">
						<div className="bg-white p-6 rounded-xl shadow-sm">
							<h2 className="text-sm font-medium text-gray-500">
								Całkowita wartość portfela
							</h2>
							<p className="text-4xl font-bold text-gray-800 mt-2">
								14,822.50 PLN
							</p>
							<p className="text-sm text-green-600 font-semibold mt-1">
								+245.30 (1.68%) dzisiaj
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-gray-800 mb-4">
								Moje Waluty
							</h3>
							<div className="space-y-4">
								<div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
									<div className="flex items-center space-x-4">
										<span className="text-2xl">🇪🇺</span>
										<div>
											<p className="font-bold text-gray-800">EUR</p>
											<p className="text-sm text-gray-500">Euro</p>
										</div>
									</div>
									<div>
										<p className="font-semibold text-gray-800 text-right">
											2,500.00 EUR
										</p>
										<p className="text-sm text-gray-500 text-right">
											10,750.00 PLN
										</p>
									</div>
								</div>
								<div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
									<div className="flex items-center space-x-4">
										<span className="text-2xl">🇺🇸</span>
										<div>
											<p className="font-bold text-gray-800">USD</p>
											<p className="text-sm text-gray-500">Dolar amerykański</p>
										</div>
									</div>
									<div>
										<p className="font-semibold text-gray-800 text-right">
											1,020.00 USD
										</p>
										<p className="text-sm text-gray-500 text-right">
											4,072.50 PLN
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="lg:col-span-1 space-y-6">
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
						<div className="bg-white p-6 rounded-xl shadow-sm">
							<h3 className="font-semibold mb-4">Ostatnie transakcje</h3>
							<ul className="space-y-3">
								<li className="flex justify-between text-sm">
									<span>Wymiana USD na PLN</span>
									<span className="font-medium text-green-600">
										+400.00 PLN
									</span>
								</li>
								<li className="flex justify-between text-sm">
									<span>Zakup EUR</span>
									<span className="font-medium text-red-600">
										-2,150.00 PLN
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
