import type { FastifyPluginAsync } from "fastify";
import { lcm } from "./testService";
const testRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.get("/", async (request, reply) => {
        const { x, y } = request.query as { x: bigint, y: bigint }
        console.group("Test lcm for " + request.ip)
        console.log("Received x", x, "y", y)
        // return if x and y isn't number
        if (!Number.isInteger(x) || !Number.isInteger(y)) {
            console.log("Result NaN")
            return "NaN"
        }
        let result = lcm(x, y)
        console.log("Result", result.toString())
        console.groupEnd()
        return result.toString();
    });
}

export default testRoutes;