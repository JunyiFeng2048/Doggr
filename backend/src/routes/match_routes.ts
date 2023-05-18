import { FastifyInstance } from "fastify";
import { Match } from "../db/entities/Match.js";
import { User } from "../db/entities/User.js";

export function MatchRoutesInit(app: FastifyInstance) {
	app.post<{ Body: { id: number; matchee_id: number } }>("/match", async (req, reply) => {
		const { id, matchee_id } = req.body;

		try {
			const matchee = await req.em.getReference(User, matchee_id);
			// do the same for the matcher/owner
			const owner = await req.em.getReference(User, id);

			//create a new match between them
			const newMatch = await req.em.create(Match, {
				owner,
				matchee,
			});

			//persist it to the database
			await req.em.flush();
			// send the match back to the user
			return reply.send(newMatch);
		} catch (err) {
			return reply.status(500).send(err);
		}
	});
}
