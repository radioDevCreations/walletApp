interface Profile_FieldProps {
	label: string;
	type?: string;
	value: string;
}

const Profile_Field = ({ label, type = "text", value }: Profile_FieldProps) => (
	<div>
		<label className="block text-sm font-medium text-gray-700">{label}</label>
		<input
			type={type}
			value={value}
			disabled
			className="mt-1 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm"
		/>
	</div>
);

export default Profile_Field;
