import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { VitePluginRadar } from 'vite-plugin-radar';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePluginRadar({
      analytics: {
        id: 'G-RE1H714GFT',
      },
    }),
  ],
  base: '',
});
