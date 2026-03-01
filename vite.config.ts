// import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
// // import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// import path from "path";
// import { defineConfig, loadEnv } from "vite";
// const env = loadEnv(mode, import.meta.dirname, "");

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [tailwindcss(), react(), TanStackRouterVite()],
//   server: {
//     proxy: {
//       "/api": {
//         target: env.VITE_API_URL,
//         changeOrigin: true,
//         secure: true,
//       },
//       "/socket.io": {
//         target: env.VITE_API_URL,
//         // ws: true,
//       },
//     },
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });

// vite.config.ts
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
// import mkcert from "vite-plugin-mkcert";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, import.meta.dirname, "");

  return {
    plugins: [
      tanstackRouter({
        target: "react",
        autoCodeSplitting: true,
      }),
      react(),
      tailwindcss(),
      // mkcert(),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    server: {
      // host: "ephemeral.to",
      proxy: {
        "/api": {
          target: env.VITE_API_URL,
          changeOrigin: true,
          secure: true,
        },
        "/socket.io": {
          target: env.VITE_API_URL,
          ws: true,
        },
      },
    },
  };
});
