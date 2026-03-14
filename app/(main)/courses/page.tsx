import { getCourses, getUserProgress } from "@/database/queries";
import List from "./list";

async function CoursesPage() {
	const courses = await getCourses();
	const userProgress = await getUserProgress();

	return (
		<div className="h-full nax-w-[912px] px-3 mx-auto">
			<h1 className="text-2xl font-bold text-neutral-500">Language Courses</h1>
			<List courses={courses} activeCourseId={userProgress?.activeCourseId} />
		</div>
	);
}

export default CoursesPage;
