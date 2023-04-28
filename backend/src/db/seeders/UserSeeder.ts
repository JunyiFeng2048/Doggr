import type { EntityManager } from "@mikro-orm/core";
import { Seeder } from "@mikro-orm/seeder";
import { User } from "../entities/User.js";

export class UserSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    em.create(User, {
      name: "Spot",
      email: "email01@email.com",
      petType: "Dog",
    });

    em.create(User, {
      name: "Dogbert",
      email: "email02@email.com",
      petType: "Dog",
    });

    em.create(User, {
      name: "Doglord",
      email: "email03@email.com",
      petType: "Dog",
    });

    em.create(User, {
      name: "NotaDog",
      email: "email04@email.com",
      petType: "Cat",
    });
  }
}
