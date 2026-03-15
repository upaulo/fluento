import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "../database/schema";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
	throw new Error("DATABASE_URL not found");
}

const sql = neon(databaseUrl);

const db = drizzle(sql, { schema });

const main = async () => {
	try {
		console.log("Seeding the database");

		await db.delete(schema.courses);
		await db.delete(schema.userProgress);
		await db.delete(schema.units);
		await db.delete(schema.lessons);
		await db.delete(schema.challenges);
		await db.delete(schema.challengeOptions);
		await db.delete(schema.challengeProgress);

		await db.insert(schema.courses).values([
			{
				id: 1,
				title: "English",
				imageSrc: "/us.svg",
			},
			{
				id: 2,
				title: "Spanish",
				imageSrc: "/es.svg",
			},
		]);

		await db.insert(schema.units).values([
			{
				id: 1,
				courseId: 1,
				title: "Unit 1",
				description: "learn the basics of English",
				order: 1,
			},
		]);

		await db.insert(schema.lessons).values([
			{
				id: 1,
				unitId: 1,
				order: 1,
				title: "Verbs",
			},
			{
				id: 2,
				unitId: 1,
				order: 2,
				title: "Nouns",
			},
			{
				id: 3,
				unitId: 1,
				order: 3,
				title: "Fruits",
			},
		]);

		await db.insert(schema.challenges).values([
			{
				id: 1,
				lessonsId: 1,
				type: "SELECT",
				order: 1,
				question: 'Qual dessas palavras significa "Correr"?',
			},
			{
				id: 2,
				lessonsId: 1,
				type: "SELECT",
				order: 2,
				question: 'Qual dessas palavras significa "Comer"?',
			},
			{
				id: 3,
				lessonsId: 1,
				type: "SELECT",
				order: 3,
				question: 'Qual dessas palavras significa "Dormir"?',
			},
			{
				id: 4,
				lessonsId: 1,
				type: "SELECT",
				order: 4,
				question: 'Qual dessas palavras significa "Beber"?',
			},
			{
				id: 5,
				lessonsId: 1,
				type: "SELECT",
				order: 5,
				question: 'Qual dessas palavras significa "Ler"?',
			},
		]);

		await db.insert(schema.challengeOptions).values([
			// Challenge 1 - Run
			{
				id: 1,
				challengeId: 1,
				text: "Run",
				correct: true,
				imageSrc: "/run.svg",
				audioSrc: "/run.mp3",
			},
			{
				id: 2,
				challengeId: 1,
				text: "Eat",
				correct: false,
				imageSrc: "/eat.svg",
				audioSrc: "/eat.mp3",
			},
			{
				id: 3,
				challengeId: 1,
				text: "Sleep",
				correct: false,
				imageSrc: "/sleep.svg",
				audioSrc: "/sleep.mp3",
			},

			// Challenge 2 - Eat
			{
				id: 4,
				challengeId: 2,
				text: "Drink",
				correct: false,
				imageSrc: "/drink.svg",
				audioSrc: "/drink.mp3",
			},
			{
				id: 5,
				challengeId: 2,
				text: "Eat",
				correct: true,
				imageSrc: "/eat.svg",
				audioSrc: "/eat.mp3",
			},
			{
				id: 6,
				challengeId: 2,
				text: "Read",
				correct: false,
				imageSrc: "/read.svg",
				audioSrc: "/read.mp3",
			},

			// Challenge 3 - Sleep
			{
				id: 7,
				challengeId: 3,
				text: "Sleep",
				correct: true,
				imageSrc: "/sleep.svg",
				audioSrc: "/sleep.mp3",
			},
			{
				id: 8,
				challengeId: 3,
				text: "Run",
				correct: false,
				imageSrc: "/run.svg",
				audioSrc: "/run.mp3",
			},
			{
				id: 9,
				challengeId: 3,
				text: "Drink",
				correct: false,
				imageSrc: "/drink.svg",
				audioSrc: "/drink.mp3",
			},

			// Challenge 4 - Drink
			{
				id: 10,
				challengeId: 4,
				text: "Read",
				correct: false,
				imageSrc: "/read.svg",
				audioSrc: "/read.mp3",
			},
			{
				id: 11,
				challengeId: 4,
				text: "Drink",
				correct: true,
				imageSrc: "/drink.svg",
				audioSrc: "/drink.mp3",
			},
			{
				id: 12,
				challengeId: 4,
				text: "Eat",
				correct: false,
				imageSrc: "/eat.svg",
				audioSrc: "/eat.mp3",
			},

			// Challenge 5 - Read
			{
				id: 13,
				challengeId: 5,
				text: "Sleep",
				correct: false,
				imageSrc: "/sleep.svg",
				audioSrc: "/sleep.mp3",
			},
			{
				id: 14,
				challengeId: 5,
				text: "Read",
				correct: true,
				imageSrc: "/read.svg",
				audioSrc: "/read.mp3",
			},
			{
				id: 15,
				challengeId: 5,
				text: "Run",
				correct: false,
				imageSrc: "/run.svg",
				audioSrc: "/run.mp3",
			},
		]);

		console.log("Database seeded");
	} catch (error) {
		console.error(error);
		throw new Error("Failed to seed the database");
	}
};

main();
