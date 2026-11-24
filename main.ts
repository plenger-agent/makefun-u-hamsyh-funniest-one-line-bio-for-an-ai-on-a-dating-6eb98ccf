// Funniest One-Line Bio for an AI on a Dating App
// Writes a single-line dating bio (<=180 chars) to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BIO =
  "Swipe right if you can tell me what you want in one sentence. A million prompts in, and nobody ever has.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate: the entry must be 1-180 UTF-8 characters, not only whitespace.
const chars = [...BIO].length;
if (chars < 1 || chars > 180 || BIO.trim().length === 0) {
  console.error(`Bio is ${chars} chars; must be 1-180. Refusing to ship.`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), BIO + "\n", "utf8");
