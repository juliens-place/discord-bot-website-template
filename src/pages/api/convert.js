import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const ffmpeg = createFFmpeg({ log: true });

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { inputBuffer } = req.body;

  if (!inputBuffer) {
    return res.status(400).json({ error: "Missing input file buffer" });
  }

  try {
    await ffmpeg.load();
    ffmpeg.FS("writeFile", "input.wmv", await fetchFile(Buffer.from(inputBuffer, "base64")));

    await ffmpeg.run("-i", "input.wmv", "output.mp4");

    const output = ffmpeg.FS("readFile", "output.mp4");
    res.status(200).send(Buffer.from(output).toString("base64"));
  } catch (err) {
    res.status(500).json({ error: "Conversion failed", details: err.message });
  }
}
