import NavBar from "../components/NavBar";
import Profile_PersonalDataSection from "../components/Profile_PersonalDataSection";
import Profile_SecuritySection from "../components/Profile_SecuritySection";

const ProfilePage = () => {
	return (
		<main className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
			<div className="max-w-4xl mx-auto">
				<NavBar />

				<div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm divide-y divide-gray-200">
					<Profile_PersonalDataSection />
					<Profile_SecuritySection />
				</div>
			</div>
		</main>
	);
};

export default ProfilePage;
