import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": "/src",
      "@appConfig": "/app.json",
      "@config": "/Config.json",
      "@assets": "/src/assets",
      "@cards": "/src/cards",
      "@common": "/src/common",
      "@components": "/src/components",
      "@constants": "/src/constants",
      "@contexts": "/src/contexts",
      "@helpers": "/src/helpers",
      "@hooks": "/src/hooks",
      "@navigation": "/src/navigation",
      "@screens_components": "/src/screens_components",
      "@screens": "/src/screens",
      "@skeltons": "/src/skeltons",
      "@services": "/src/services",
      "@features": "/src/services/features",
      "@global": "/src/services/global",
      "@reducers": "/src/redux/reducers",
      "@redux": "/src/redux",
    },
  },
});
