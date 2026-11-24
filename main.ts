import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Picture every library on earth joined by roads so swift a letter from London reaches Sydney before the ink dries, and any man may read what strangers wrote.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);
console.log(`chars: ${entry.length}`);
