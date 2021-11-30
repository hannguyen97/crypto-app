import { defineConfig } from "vite";
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: [
      { find: /^~/, replacement: "" },
    ],
  },
  plugins: [
    reactRefresh(),
  ],
});