import { FastifyPluginAsync, FastifyRequest, FastifyReply } from "fastify";
import fastifyPlugin from "fastify-plugin";

declare module "fastify" {
  interface FastifyInstance {
    authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
    authorize: (roles: string[]) => (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
  }
}

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: { id: number; email: string; role: string };
    user: { id: number; email: string; role: string };
  }
}

const authPlugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.decorate("authenticate", async function (request: FastifyRequest, reply: FastifyReply) {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });

  fastify.decorate("authorize", function (roles: string[]) {
    return async function (request: FastifyRequest, reply: FastifyReply) {
      await fastify.authenticate(request, reply);
      const user = request.user;
      if (!roles.includes(user.role)) {
        reply.status(403).send({ message: "Forbidden" });
      }
    };
  });
};

export default fastifyPlugin(authPlugin);
