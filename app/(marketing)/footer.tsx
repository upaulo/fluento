import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Footer = () => {
	return (
		<footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
			<div className="max-w-5xl mx-auto flex items-center justify-evenly h-full">
				<Button size="lg" variant="ghost">
					<Image
						src="/us.svg"
						alt="English"
						height={32}
						width={40}
						className="mr-4 rounded-md"
					/>
					English
				</Button>

				<Button size="lg" variant="ghost">
					<Image
						src="/es.svg"
						alt="Spanish"
						height={32}
						width={40}
						className="mr-4 rounded-md"
					/>
					Spanish
				</Button>
			</div>
		</footer>
	);
};
