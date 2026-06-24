import { FastifyPluginAsync } from "fastify";
import db from "../db";

const projectRoutes: FastifyPluginAsync = async (fastify) => {
  // Public route
  fastify.get("/", async (request, reply) => {
    const projects = await db("projects").where({ is_published: true }).orderBy("created_at", "desc");
    return projects;
  });

  fastify.get("/:slug", async (request, reply) => {
    const { slug } = request.params as { slug: string };
    const project = await db("projects").where({ slug }).first();
    if (!project) {
      return reply.status(404).send({ message: "Project not found" });
    }
    return project;
  });

  // Protected Admin Routes
  fastify.post(
    "/",
    { preValidation: [fastify.authorize(["admin"])] },
    async (request, reply) => {
      const data = request.body as any;
      const [id] = await db("projects").insert(data).returning("id");
      return reply.status(201).send({ id, ...data });
    }
  );

  fastify.put(
    "/:id",
    { preValidation: [fastify.authorize(["admin"])] },
    async (request, reply) => {
      const { id } = request.params as { id: string };
      const data = request.body as any;
      await db("projects").where({ id }).update({ ...data, updated_at: db.fn.now() });
      return reply.send({ success: true });
    }
  );

  fastify.delete(
    "/:id",
    { preValidation: [fastify.authorize(["admin"])] },
    async (request, reply) => {
      const { id } = request.params as { id: string };
      await db("projects").where({ id }).del();
      return reply.send({ success: true });
    }
  );
};

export default projectRoutes;
