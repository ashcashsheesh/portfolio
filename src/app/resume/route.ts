import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "resume.pdf");
  const data = await readFile(filePath);

  return new Response(data, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Asher-Nam-Resume.pdf"',
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
