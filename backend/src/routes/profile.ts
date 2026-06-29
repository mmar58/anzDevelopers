import { FastifyPluginAsync } from "fastify";
import db from "../db";

const profileRoutes: FastifyPluginAsync = async (fastify) => {
  // Public: get founder profile
  fastify.get("/", async (request, reply) => {
    const profile = await db("profile").first();
    if (!profile) {
      return reply.status(404).send({ message: "Profile not found" });
    }
    return profile;
  });

  // Admin: update profile
  fastify.put(
    "/",
    { preValidation: [fastify.authorize(["admin"])] },
    async (request, reply) => {
      const data = request.body as any;
      const existing = await db("profile").first();

      if (existing) {
        await db("profile").where({ id: existing.id }).update({ ...data, updated_at: db.fn.now() });
      } else {
        await db("profile").insert(data);
      }

      return reply.send({ success: true });
    }
  );
};

export default profileRoutes;
