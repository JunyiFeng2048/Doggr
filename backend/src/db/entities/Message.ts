import { Entity, Property, ManyToOne } from "@mikro-orm/core";

import type { Ref, Rel } from "@mikro-orm/core";
import { DoggrBaseEntity } from "./DoggrBaseEntity.js";
import { User } from "./User.js";

@Entity()
export class Message extends DoggrBaseEntity {
	// The person who performed the match/swiped right
	@ManyToOne()
	sender!: Ref<User>;

	// The account whose profile was swiped-right-on
	@ManyToOne("User")
	receiver!: Rel<User>;

	@Property()
	message!: string;
}
