import { getCourses } from "@/database/query";
import List from "./list";

async function CoursesPage() {
	const courses = await getCourses();
	return (
		<div className="h-full nax-w-[912px] px-3 mx-auto">
			<h1 className="text-2xl font-bold text-neutral-500">Language Courses</h1>
			<List courses={courses} activeCourseId={1} />
		</div>
	);
}

export default CoursesPage;
