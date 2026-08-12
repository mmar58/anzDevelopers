import type { FastifyPluginAsync } from "fastify";
import { lcm } from "./testService";
const testRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.get("/", async (request, reply) => {
        const { x, y } = request.query as { x: string, y: string }
        console.group("Test lcm for " + request.ip)
        console.log("Received x", x, "y", y)
        // return if x and y isn't number
        if (!x || !y || isNaN(Number(x)) || isNaN(Number(y))) {
            console.log("Result NaN")
            console.groupEnd()
            return "NaN"
        }

        try {
            const bigX = BigInt(x);
            const bigY = BigInt(y);
            let result = lcm(bigX, bigY);
            console.log("Result", result.toString())
            console.groupEnd()
            return result.toString();
        } catch (e) {
            console.log("Result NaN")
            console.groupEnd()
            return "NaN"
        }
    });
}

export default testRoutes;