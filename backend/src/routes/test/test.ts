import type { FastifyPluginAsync } from "fastify";
import { lcm } from "./testService";
const testRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.get("/", async (request, reply) => {
        const { x, y } = request.query as { x: string, y: string }
        // return x + " " + y
        if (!x || !y) {
            reply.status(400).send({ message: "Invalid input" });
        }
        let numberX = 0, numberY = 0;
        if (x !== "{}") {
            if (x.includes("{")) {
                numberX = parseInt(x.split("{")[1].split("}")[0])
            } else {
                numberX = parseInt(x)
            }
        } else {
            numberX = 0
        }
        if (y !== "{}") {
            if (y.includes("{")) {
                numberY = parseInt(y.split("{")[1].split("}")[0])
            } else {
                numberY = parseInt(y)
            }
        } else {
            numberY = 0
        }
        return lcm(numberX, numberY);
    });
}

export default testRoutes;