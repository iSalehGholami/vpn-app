import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import react from "@vitejs/plugin-react-swc";
export default defineConfig({
  plugins: [mkcert(), react()],
  base: "/vpn-app/",
});
