import FeedWrapper from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";
import Header from "../header";

function LearnPage() {
	return (
		<div className="flex flex-row-reverse gap-[48px] px-6">
			<StickyWrapper>
				<div className="h-[100px] w-full bg-red-500">sticky sidebar</div>
				<div className="h-[100px] w-full bg-red-500">sticky sidebar</div>
				<div className="h-[100px] w-full bg-red-500">sticky sidebar</div>
			</StickyWrapper>
			<FeedWrapper>
				<Header title="English" />
			</FeedWrapper>
		</div>
	);
}

export default LearnPage;
