export default function ProfilePage() {
	return (
		<main className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
			<div className="max-w-4xl mx-auto">
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
							className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
						>
							Profil
						</a>
					</div>
				</nav>

				<div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm divide-y divide-gray-200">
					<div className="py-6">
						<h2 className="text-xl font-semibold text-gray-800">
							Dane Osobowe
						</h2>
						<p className="text-sm text-gray-500 mt-1">
							Podstawowe informacje o Twoim koncie.
						</p>
						<div className="mt-4 space-y-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Imię i Nazwisko
								</label>
								<input
									type="text"
									value="Jan Kowalski"
									disabled
									className="mt-1 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Adres e-mail
								</label>
								<input
									type="email"
									value="jan.kowalski@example.com"
									disabled
									className="mt-1 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm"
								/>
							</div>
						</div>
					</div>

					<div className="py-6">
						<h2 className="text-xl font-semibold text-gray-800">
							Bezpieczeństwo
						</h2>
						<p className="text-sm text-gray-500 mt-1">
							Zarządzaj hasłem i zabezpieczeniami konta.
						</p>
						<div className="mt-4">
							<button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300">
								Zmień hasło
							</button>
						</div>
						<div className="mt-4 flex justify-between items-center">
							<div>
								<p className="font-medium">
									Uwierzytelnianie dwuskładnikowe (2FA)
								</p>
								<p className="text-sm text-gray-500">Wyłączone</p>
							</div>
							<button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600">
								Włącz
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
