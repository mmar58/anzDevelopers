import { FastifyPluginAsync } from "fastify";
import db from "../db";

const blogRoutes: FastifyPluginAsync = async (fastify) => {
  // Public: list published blogs with pagination
  fastify.get("/", async (request, reply) => {
    const { page = 1, limit = 10, category } = request.query as {
      page?: number;
      limit?: number;
      category?: string;
    };

    const query = db("blogs")
      .where({ is_published: true })
      .orderBy("created_at", "desc");

    if (category) {
      query.where({ category });
    }

    const offset = (Number(page) - 1) * Number(limit);
    const blogs = await query.limit(Number(limit)).offset(offset);

    const [{ count }] = await db("blogs")
      .where({ is_published: true })
      .count("id as count");

    return {
      data: blogs,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: Number(count),
        totalPages: Math.ceil(Number(count) / Number(limit)),
      },
    };
  });

  // Public: get single blog by slug
  fastify.get("/:slug", async (request, reply) => {
    const { slug } = request.params as { slug: string };
    const blog = await db("blogs").where({ slug }).first();
    if (!blog) {
      return reply.status(404).send({ message: "Blog post not found" });
    }
    return blog;
  });

  // Admin: create blog
  fastify.post(
    "/",
    { preValidation: [fastify.authorize(["admin", "editor"])] },
    async (request, reply) => {
      const data = request.body as any;
      const [id] = await db("blogs").insert(data).returning("id");
      return reply.status(201).send({ id, ...data });
    }
  );

  // Admin: update blog
  fastify.put(
    "/:id",
    { preValidation: [fastify.authorize(["admin", "editor"])] },
    async (request, reply) => {
      const { id } = request.params as { id: string };
      const data = request.body as any;
      await db("blogs").where({ id }).update({ ...data, updated_at: db.fn.now() });
      return reply.send({ success: true });
    }
  );

  // Admin: delete blog
  fastify.delete(
    "/:id",
    { preValidation: [fastify.authorize(["admin"])] },
    async (request, reply) => {
      const { id } = request.params as { id: string };
      await db("blogs").where({ id }).del();
      return reply.send({ success: true });
    }
  );
};

export default blogRoutes;
