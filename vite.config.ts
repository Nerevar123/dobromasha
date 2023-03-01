import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import ViteRadar from 'vite-plugin-radar';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    ViteRadar({
      analytics: {
        id: 'G-RE1H714GFT',
      },
    }),
  ],
  base: '.',
});
