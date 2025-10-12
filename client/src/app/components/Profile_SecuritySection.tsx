import Section from "./Section";

const Profile_SecuritySection = () => (
	<Section
		title="Bezpieczeństwo"
		description="Zarządzaj hasłem i zabezpieczeniami konta."
	>
		<div className="space-y-4">
			<button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300">
				Zmień hasło
			</button>

			<div className="flex justify-between items-center">
				<div>
					<p className="font-medium">Uwierzytelnianie dwuskładnikowe (2FA)</p>
					<p className="text-sm text-gray-500">Wyłączone</p>
				</div>
				<button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600">
					Włącz
				</button>
			</div>
		</div>
	</Section>
);

export default Profile_SecuritySection;
