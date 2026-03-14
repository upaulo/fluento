import { redirect } from "next/navigation";
import FeedWrapper from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";
import UserProgress from "@/components/user-progress";
import { getUserProgress } from "@/database/queries";
import Header from "./header";

async function LearnPage() {
	const userProgress = await getUserProgress();

	if (!userProgress || !userProgress.activeCourse) {
		redirect("/courses");
	}
	return (
		<div className="flex flex-row-reverse gap-[48px] px-6">
			<StickyWrapper>
				<UserProgress
					activeCourse={{ title: "English", imageSrc: "/us.svg" }}
					hearts={10}
					points={50}
					hasActiveSubscription={false}
				/>
			</StickyWrapper>
			<FeedWrapper>
				<Header title="English" />
			</FeedWrapper>
		</div>
	);
}

export default LearnPage;
