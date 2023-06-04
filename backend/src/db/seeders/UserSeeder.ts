import type { Dictionary, EntityManager } from "@mikro-orm/core";
import { Seeder } from "@mikro-orm/seeder";
import { User, UserRole } from "../entities/User.js";
import bcrypt from "bcrypt";

export class UserSeeder extends Seeder {
	async run(em: EntityManager, context: Dictionary): Promise<void> {
		const hashedPw = await bcrypt.hash("password", 10);

		context.user1 = em.create(User, {
			name: "test01",
			email: "test01@email.com",
			password: hashedPw,
			petType: "Dog",
			role: UserRole.ADMIN,
			imgUri: "dog.jpg",
		});

		context.user2 = em.create(User, {
			name: "test02",
			email: "test02@email.com",
			password: hashedPw,
			petType: "Dog",
			role: UserRole.USER,
			imgUri: "dog.jpg",
		});

		context.user3 = em.create(User, {
			name: "test03",
			email: "test03@email.com",
			password: hashedPw,
			petType: "Dog",
			role: UserRole.USER,
			imgUri: "dog.jpg",
		});

		context.user4 = em.create(User, {
			name: "test04",
			email: "test04@email.com",
			password: hashedPw,
			petType: "Cat",
			role: UserRole.USER,
			imgUri: "dog.jpg",
		});
	}
}
