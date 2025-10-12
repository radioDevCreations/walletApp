"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
	const pathname = usePathname();

	const links = [
		{ href: "/", label: "Dashboard" },
		{ href: "/charts", label: "Wykresy" },
		{ href: "/exchange", label: "Wymiana" },
		{ href: "/profile", label: "Profil" },
	];

	return (
		<nav className="flex justify-center mb-10">
			<div className="bg-white shadow-sm rounded-full p-2 flex space-x-2">
				{links.map(({ href, label }) => (
					<Link
						key={href}
						href={href}
						className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
							pathname === href
								? "bg-blue-500 text-white"
								: "text-gray-600 hover:bg-gray-100"
						}`}
					>
						{label}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default NavBar;
