import Fastify from "fastify";
import cors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
import fastifyMultipart from "@fastify/multipart";
import fastifyStatic from "@fastify/static";
import path from "path";
import dotenv from "dotenv";

import authPlugin from "./plugins/auth";
import authRoutes from "./routes/auth";
import projectRoutes from "./routes/projects";
import uploadRoutes from "./routes/uploads";

dotenv.config();

const fastify = Fastify({
  logger: true,
});

// Register Plugins
fastify.register(cors, {
  origin: "*", // Configure this to frontend URL in production
});

fastify.register(fastifyJwt, {
  secret: process.env.JWT_SECRET || "super-secret-key-change-me-in-production",
});

fastify.register(fastifyMultipart, {
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB
  },
});

fastify.register(fastifyStatic, {
  root: path.join(__dirname, "../uploads"),
  prefix: "/uploads/",
});

// Register Custom Auth Plugin
fastify.register(authPlugin);

// Register Routes
fastify.register(authRoutes, { prefix: "/api/auth" });
fastify.register(projectRoutes, { prefix: "/api/projects" });
fastify.register(uploadRoutes, { prefix: "/api/uploads" });

// Health check
fastify.get("/health", async (request, reply) => {
  return { status: "ok" };
});

const start = async () => {
  try {
    const port = Number(process.env.PORT) || 3000;
    await fastify.listen({ port, host: "0.0.0.0" });
    console.log(`Server listening at http://localhost:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
