import FeedWrapper from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";
import UserProgress from "@/components/user-progress";
import Header from "../header";

function LearnPage() {
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
