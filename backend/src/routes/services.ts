import { FastifyPluginAsync } from "fastify";
import db from "../db";

const serviceRoutes: FastifyPluginAsync = async (fastify) => {
  // Public: list all services
  fastify.get("/", async (request, reply) => {
    const services = await db("services").orderBy("sort_order", "asc");
    return services;
  });

  // Public: get single service by slug
  fastify.get("/:slug", async (request, reply) => {
    const { slug } = request.params as { slug: string };
    const service = await db("services").where({ slug }).first();
    if (!service) {
      return reply.status(404).send({ message: "Service not found" });
    }
    return service;
  });

  // Admin: create service
  fastify.post(
    "/",
    { preValidation: [fastify.authorize(["admin"])] },
    async (request, reply) => {
      const data = request.body as any;
      const [id] = await db("services").insert(data).returning("id");
      return reply.status(201).send({ id, ...data });
    }
  );

  // Admin: update service
  fastify.put(
    "/:id",
    { preValidation: [fastify.authorize(["admin"])] },
    async (request, reply) => {
      const { id } = request.params as { id: string };
      const data = request.body as any;
      await db("services").where({ id }).update({ ...data, updated_at: db.fn.now() });
      return reply.send({ success: true });
    }
  );

  // Admin: delete service
  fastify.delete(
    "/:id",
    { preValidation: [fastify.authorize(["admin"])] },
    async (request, reply) => {
      const { id } = request.params as { id: string };
      await db("services").where({ id }).del();
      return reply.send({ success: true });
    }
  );
};

export default serviceRoutes;
