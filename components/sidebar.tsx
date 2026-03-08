import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "@/components/sidebar-item";
import { cn } from "@/lib/utils";

type Props = {
	className?: string;
};
function Sidebar({ className }: Props) {
	return (
		<div
			className={cn(
				"flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
				className,
			)}
		>
			<Link href="/learn">
				<div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
					<Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
					<h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
						Fluento
					</h1>
				</div>
			</Link>
			<SidebarItem label="learn" iconSrc="/learn.svg" href="/learn" />
			<SidebarItem
				label="leaderboard"
				iconSrc="/leaderboard.svg"
				href="/leaderboard"
			/>
			<SidebarItem label="quests" iconSrc="/quests.svg" href="/quests" />
			<SidebarItem label="shop" iconSrc="/shop.svg" href="/shop" />
			<div className="p-4">
				<ClerkLoading>
					<Loader className="h-5 w-5 text-muted-foreground animate-spin" />
				</ClerkLoading>
				<ClerkLoaded>
					<UserButton />
				</ClerkLoaded>
			</div>
		</div>
	);
}

export default Sidebar;
