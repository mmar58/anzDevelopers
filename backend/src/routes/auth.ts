import { FastifyPluginAsync } from "fastify";
import bcrypt from "bcryptjs";
import db from "../db";

const authRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.post("/login", async (request, reply) => {
    const { email, password } = request.body as any;

    if (!email || !password) {
      return reply.status(400).send({ message: "Email and password are required" });
    }

    const user = await db("users").where({ email }).first();

    if (!user) {
      return reply.status(401).send({ message: "Invalid email or password" });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return reply.status(401).send({ message: "Invalid email or password" });
    }

    const token = fastify.jwt.sign({ id: user.id, email: user.email, role: user.role });

    return reply.send({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  });

  fastify.get(
    "/me",
    { preValidation: [fastify.authenticate] },
    async (request, reply) => {
      const user = await db("users").where({ id: request.user.id }).first();
      return reply.send({
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    }
  );
};

export default authRoutes;
