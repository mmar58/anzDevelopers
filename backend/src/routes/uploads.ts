import { FastifyPluginAsync } from "fastify";
import fs from "fs";
import path from "path";
import util from "util";
import { pipeline } from "stream";

const pump = util.promisify(pipeline);

const uploadRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.post(
    "/",
    { preValidation: [fastify.authorize(["admin", "editor"])] },
    async (request, reply) => {
      const data = await request.file();

      if (!data) {
        return reply.status(400).send({ message: "No file uploaded" });
      }

      const uploadsDir = path.join(__dirname, "../../uploads");
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

      const filename = `${Date.now()}-${data.filename}`;
      const filePath = path.join(uploadsDir, filename);

      await pump(data.file, fs.createWriteStream(filePath));

      // Return the URL where the file can be accessed
      const fileUrl = `/uploads/${filename}`;

      return reply.send({
        url: fileUrl,
        filename,
      });
    }
  );
};

export default uploadRoutes;
