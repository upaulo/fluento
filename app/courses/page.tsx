import { getCourses } from "@/database/query";

async function CoursesPage() {
	const courses = await getCourses();
	return (
		<div className="h-full nax-w-[912px] px-3 mx-auto">
			<h1 className="text-2xl font-bold text-neutral-500">couses page</h1>
			{JSON.stringify(courses)}
		</div>
	);
}

export default CoursesPage;
