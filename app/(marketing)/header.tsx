import {
	ClerkLoaded,
	ClerkLoading,
	Show,
	SignInButton,
	UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Header = () => {
	return (
		<div>
			<header className="h-20 w-full border-2 border-slate-200 px-4">
				<div className="lg:max-w-5xl mx-auto flex items-center justify-between h-full">
					<div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
						<Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
						<h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
							Fluento
						</h1>
					</div>
					<ClerkLoading>
						<Loader className="h-5 w-5 text-muted-foreground animate-spin" />
					</ClerkLoading>
					<ClerkLoaded>
						<Show when="signed-in">
							<UserButton />
						</Show>
						<Show when="signed-out">
							<SignInButton mode="modal">
								<Button size="lg" variant="ghost">
									Login
								</Button>
							</SignInButton>
						</Show>
					</ClerkLoaded>
				</div>
			</header>
		</div>
	);
};
