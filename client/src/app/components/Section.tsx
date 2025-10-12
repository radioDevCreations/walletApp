import { ReactNode } from "react";

interface SectionProps {
	title: string;
	description?: string;
	children: ReactNode;
}

const Section = ({ title, description, children }: SectionProps) => (
	<section className="py-6">
		<h2 className="text-xl font-semibold text-gray-800">{title}</h2>
		{description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
		<div className="mt-4">{children}</div>
	</section>
);

export default Section;
