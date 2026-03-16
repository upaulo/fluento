"use client";

import { useState } from "react";
import type { challengeOptions, challenges } from "@/database/schema";
import Header from "./header";

type Props = {
	initialLessonId: number;
	initialLessonChallenges: (typeof challenges.$inferSelect & {
		completed: boolean;
		challengeOptions: (typeof challengeOptions.$inferSelect)[];
	})[];
	initialHearts: number;
	initialPercentage: number;
	userSubscription: any;
};

function Quiz({
	initialLessonId,
	initialLessonChallenges,
	initialHearts,
	initialPercentage,
	userSubscription,
}: Props) {
	const [hearts, setHearts] = useState(initialHearts);
	const [percentage, setPercentage] = useState(initialPercentage);

	return (
		<>
			<Header
				hearts={hearts}
				percentage={percentage}
				hasActiveSubscription={!!userSubscription?.isActive}
			/>
		</>
	);
}

export default Quiz;
