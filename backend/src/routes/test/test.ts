import type { FastifyPluginAsync } from "fastify";
import { lcm } from "./testService";
const testRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.get("/", async (request, reply) => {
        const { x, y } = request.query as { x: string, y: string }
        console.group("Test lcm for " + request.ip)
        console.log("Received x", x, "y", y)
        // return x + " " + y
        if (!x || !y) {
            reply.status(400).send({ message: "Invalid input" });
        }
        let numberX = 0n, numberY = 0n;

        if (x.includes("{") || y.includes("{") || x.includes("}") || y.includes("}")) {
            console.log("Result NaN")
            return "NaN"
        }
        else {
            numberX = BigInt(x)
            numberY = BigInt(y)
        }
        let result = lcm(numberX, numberY)
        console.log("Result", result.toString())
        console.groupEnd()
        return result.toString();
    });
}

export default testRoutes;