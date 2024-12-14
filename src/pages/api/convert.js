import ffmpeg from "fluent-ffmpeg";
import fs from "fs";
import { Readable } from "stream";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { inputFile, outputFilename } = req.body;
  if (!inputFile || !outputFilename) {
    return res.status(400).json({ error: "Missing input file or output filename" });
  }

  try {
    // Convert input base64 to a readable stream
    const inputStream = new Readable();
    inputStream.push(Buffer.from(inputFile, "base64"));
    inputStream.push(null);

    // Create output stream
    const outputStream = new Readable({
      read() {
        this.push(null); // End of stream
      },
    });
    const outputBuffer = [];

    // Run ffmpeg
    ffmpeg(inputStream)
      .format("mp4")
      .on("data", (chunk) => outputBuffer.push(chunk))
      .on("end", () => {
        const convertedFile = Buffer.concat(outputBuffer);
        res.status(200).json({ file: convertedFile.toString("base64") }); // Send back as base64
      })
      .on("error", (err) => {
        res.status(500).json({ error: "Conversion failed", details: err.message });
      })
      .pipe(outputStream);
  } catch (err) {
    res.status(500).json({ error: "Processing failed", details: err.message });
  }
}
