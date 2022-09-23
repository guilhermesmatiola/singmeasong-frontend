import { faker } from "@faker-js/faker";

export async function recommendationFactory() {
	return {
		name: faker.lorem.words(3),
		youtubeLink: "https://www.youtube.com/watch?v=u1V8YRJnr4Q",
	};
}