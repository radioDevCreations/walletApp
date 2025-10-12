import Section from "./Section";
import Profile_Field from "./Profile_Field";

const Profile_PersonalDataSection = () => (
	<Section
		title="Dane Osobowe"
		description="Podstawowe informacje o Twoim koncie."
	>
		<div className="space-y-4">
			<Profile_Field label="Imię i Nazwisko" value="Jan Kowalski" />
			<Profile_Field
				label="Adres e-mail"
				type="email"
				value="jan.kowalski@example.com"
			/>
		</div>
	</Section>
);

export default Profile_PersonalDataSection;
