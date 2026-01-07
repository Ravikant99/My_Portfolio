import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"

export default defineConfig({
  plugins: [react()],
  base: "/My_Portfolio/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src") // 👈 this tells Vite that @ = src/
    }
  }
})
