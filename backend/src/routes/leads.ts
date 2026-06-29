import { FastifyPluginAsync } from "fastify";
import { z } from "zod";
import db from "../db";

const leadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  budget: z.string().optional(),
  project_type: z.string().optional(),
  project_description: z.string().optional(),
});

const leadRoutes: FastifyPluginAsync = async (fastify) => {
  // Public: submit contact form
  fastify.post("/", async (request, reply) => {
    try {
      const data = leadSchema.parse(request.body);
      const [id] = await db("leads").insert(data).returning("id");
      return reply.status(201).send({
        success: true,
        message: "Thank you! We'll get back to you soon.",
        id,
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return reply.status(400).send({
          message: "Validation error",
          errors: err.errors,
        });
      }
      throw err;
    }
  });

  // Admin: list all leads
  fastify.get(
    "/",
    { preValidation: [fastify.authorize(["admin"])] },
    async (request, reply) => {
      const { page = 1, limit = 20, status } = request.query as {
        page?: number;
        limit?: number;
        status?: string;
      };

      const query = db("leads").orderBy("created_at", "desc");

      if (status) {
        query.where({ status });
      }

      const offset = (Number(page) - 1) * Number(limit);
      const leads = await query.limit(Number(limit)).offset(offset);

      const [{ count }] = await db("leads").count("id as count");

      return {
        data: leads,
        pagination: {
          page: Number(page),
          limit: Number(limit),
          total: Number(count),
          totalPages: Math.ceil(Number(count) / Number(limit)),
        },
      };
    }
  );

  // Admin: update lead status
  fastify.put(
    "/:id",
    { preValidation: [fastify.authorize(["admin"])] },
    async (request, reply) => {
      const { id } = request.params as { id: string };
      const data = request.body as any;
      await db("leads").where({ id }).update({ ...data, updated_at: db.fn.now() });
      return reply.send({ success: true });
    }
  );

  // Admin: delete lead
  fastify.delete(
    "/:id",
    { preValidation: [fastify.authorize(["admin"])] },
    async (request, reply) => {
      const { id } = request.params as { id: string };
      await db("leads").where({ id }).del();
      return reply.send({ success: true });
    }
  );
};

export default leadRoutes;
