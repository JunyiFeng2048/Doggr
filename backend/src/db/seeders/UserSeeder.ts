import type { Dictionary, EntityManager } from "@mikro-orm/core";
import { Seeder } from "@mikro-orm/seeder";
import { User, UserRole } from "../entities/User.js";

export class UserSeeder extends Seeder {
	async run(em: EntityManager, context: Dictionary): Promise<void> {
		context.user1 = em.create(User, {
			name: "test01",
			email: "test01@email.com",
			password: "password",
			petType: "Dog",
			role: UserRole.ADMIN,
		});

		context.user2 = em.create(User, {
			name: "test02",
			email: "test02@email.com",
			password: "password",
			petType: "Dog",
			role: UserRole.USER,
		});

		context.user3 = em.create(User, {
			name: "test03",
			email: "test03@email.com",
			password: "password",
			petType: "Dog",
			role: UserRole.USER,
		});

		context.user4 = em.create(User, {
			name: "test04",
			email: "test04@email.com",
			password: "password",
			petType: "Cat",
			role: UserRole.USER,
		});
	}
}
