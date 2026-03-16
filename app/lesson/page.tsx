import { redirect } from "next/navigation";
import { getLesson, getUserProgress } from "@/database/queries";
import Quiz from "./quiz";

async function LessonPage() {
	const lessonData = await getLesson();
	const userProgress = await getUserProgress();

	if (!lessonData || !userProgress) {
		redirect("/learn");
	}

	const initialPercentage =
		(lessonData.challenges.filter((challenge) => challenge.completed).length /
			lessonData.challenges.length) *
		100;

	return (
		<Quiz
			initialLessonId={lessonData.id}
			initialLessonChallenges={lessonData.challenges}
			initialHearts={userProgress.hearts}
			initialPercentage={initialPercentage}
			userSubscription={null}
		/>
	);
}

export default LessonPage;
