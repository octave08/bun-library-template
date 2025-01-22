import { existsSync } from "node:fs";
import { rm } from "node:fs/promises";

import type { BuildConfig } from "bun";
import isolatedDecl from "bun-plugin-isolated-decl";

const main = async () => {
  if (existsSync("./dist")) {
    await rm("./dist", { recursive: true });
  }

  const buildOptions: BuildConfig = {
    entrypoints: ["./src/index.ts"],
    outdir: "./dist",
    plugins: [isolatedDecl()],
    drop: ["console"],
  };

  await Bun.build({
    ...buildOptions,
    format: "esm",
    naming: "[name].[ext]",
  });

  await Bun.build({
    ...buildOptions,
    format: "cjs",
    naming: "[name].cjs",
  });
};

main()
  .then(() => console.log("🎉 Build completed"))
  .catch(() => {
    console.error("❌ Build failed");
    process.exit(1);
  });
