import ffmpeg from "fluent-ffmpeg";
import path from "path";
import fs from "fs";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { inputFilePath, outputFilePath } = req.body;

  if (!inputFilePath || !outputFilePath) {
    return res.status(400).json({ error: "Missing input or output file path" });
  }

  const inputAbsolutePath = path.resolve(inputFilePath);
  const outputAbsolutePath = path.resolve(outputFilePath);

  // Check if input file exists
  if (!fs.existsSync(inputAbsolutePath)) {
    return res.status(404).json({ error: "Input file does not exist" });
  }

  ffmpeg(inputAbsolutePath)
    .output(outputAbsolutePath)
    .on("end", () => {
      res.status(200).json({ message: "Conversion completed", outputFile: outputAbsolutePath });
    })
    .on("error", (err) => {
      res.status(500).json({ error: "Conversion failed", details: err.message });
    })
    .run();
}
