import { redirect } from "next/navigation";
import FeedWrapper from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";
import UserProgress from "@/components/user-progress";
import {
	getCourseProgress,
	getLessonPercentage,
	getUnits,
	getUserProgress,
} from "@/database/queries";
import Header from "./header";
import Unit from "./unit";

async function LearnPage() {
	const userProgress = await getUserProgress();
	const unitsData = await getUnits();
	const courseProgressData = await getCourseProgress();
	const lessonPercentageData = await getLessonPercentage();

	if (!userProgress || !userProgress.activeCourse) {
		redirect("/courses");
	}

	if (!courseProgressData) {
		redirect("/courses");
	}

	return (
		<div className="flex flex-row-reverse gap-[48px] px-6">
			<StickyWrapper>
				<UserProgress
					activeCourse={userProgress.activeCourse}
					hearts={userProgress.hearts}
					points={userProgress.points}
					hasActiveSubscription={false}
				/>
			</StickyWrapper>
			<FeedWrapper>
				<Header title={userProgress.activeCourse.title} />
				{unitsData.map((unit) => (
					<div key={unit.id} className="mb-10">
						<Unit
							id={unit.id}
							order={unit.order}
							description={unit.description}
							title={unit.title}
							lessons={unit.lessons}
							activeLesson={courseProgressData.activeLesson}
							activeLessonPercentage={lessonPercentageData}
						/>
					</div>
				))}
			</FeedWrapper>
		</div>
	);
}

export default LearnPage;
