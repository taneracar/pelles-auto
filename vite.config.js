import { loadEnv, defineConfig } from "vite";
import dotenvExpand from "dotenv-expand";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  if (mode === "development") {
    const env = loadEnv(mode, process.cwd(), "");
    dotenvExpand.expand({ parsed: env });
  }

  return {
    plugins: [react(), tailwindcss()],
  };
});

/* export default defineConfig({
  plugins: [react(), tailwindcss()],
});
 */
