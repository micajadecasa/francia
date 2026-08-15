import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'images/*.png', 'audio/*.mp3'],
      manifest: {
        name: 'Audioguía Francia',
        short_name: 'Francia',
        description: 'Audioguía personal de mi viaje a Francia',
        theme_color: '#f9f9fb',
        background_color: '#f9f9fb',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,mp3}'],
        maximumFileSizeToCacheInBytes: 50 * 1024 * 1024 // 50MB for audio files
      }
    })
  ],
  build: {
    outDir: 'web'
  }
});
