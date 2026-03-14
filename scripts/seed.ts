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

		console.log("Database seeded");
	} catch (error) {
		console.error(error);
		throw new Error("Failed to seed the database");
	}
};

main();
