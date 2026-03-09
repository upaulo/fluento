import FeedWrapper from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";

function LearnPage() {
	return (
		<div className="flex flex-row-reverse gap-[48px] px-6">
			<StickyWrapper>
				<div className="h-[100px] w-full bg-red-500">sticky sidebar</div>
				<div className="h-[100px] w-full bg-red-500">sticky sidebar</div>
				<div className="h-[100px] w-full bg-red-500">sticky sidebar</div>
			</StickyWrapper>
			<FeedWrapper>
				<div className="h-[200px] w-full bg-blue-500 mb-1">feed</div>
				<div className="h-[200px] w-full bg-blue-500 mb-1">feed</div>
				<div className="h-[200px] w-full bg-blue-500 mb-1">feed</div>
			</FeedWrapper>
		</div>
	);
}

export default LearnPage;
