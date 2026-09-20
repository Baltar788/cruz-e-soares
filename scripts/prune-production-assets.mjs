import { existsSync } from "node:fs";
import { readdir, rm, stat } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const publicDirectory = join(process.cwd(), ".output", "public");

const retainedFiles = new Set([
  "_headers",
  "favicon.jpg",
  "logo-transparent.png",
  "robots.txt",
  "images/hero.webp",
  "images/gustavo-800.webp",
  "images/denise-800.webp",
  "images/renan-v2-800.webp",
  "images/rafael-800.webp",
  "images/bape-v2-800.webp",
]);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) return walk(path);
      return [path];
    }),
  );
}

if (!existsSync(publicDirectory)) {
  throw new Error("A saída de produção não foi encontrada.");
}

const files = (await walk(publicDirectory)).flat(Infinity);
let removedBytes = 0;

for (const file of files) {
  const assetPath = relative(publicDirectory, file).split(sep).join("/");
  if (assetPath.startsWith("assets/") || retainedFiles.has(assetPath)) continue;

  removedBytes += (await stat(file)).size;
  await rm(file);
}

console.log(
  `Arquivos não utilizados removidos da publicação: ${(removedBytes / 1024 / 1024).toFixed(1)} MB`,
);
