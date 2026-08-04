// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  // -------------------------------------------------
  //  IMPORTANTE: Base URL para GitHub Pages
  // -------------------------------------------------
  base: '/francia/',               // <‑‑ Ruta del repositorio en GitHub Pages

  plugins: [
    react(),

    // -------------------------------------------------
    //  Configuración de la PWA
    // -------------------------------------------------
    VitePWA({
      registerType: 'autoUpdate',
      // Los assets que se copiarán al build (favicon, apple‑touch‑icon, imágenes y audios)
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        // cualquier PNG dentro de public/images/
        'images/*.png',
        // cualquier MP3 dentro de public/audio/
        'audio/*.mp3'
      ],

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
        // Cachea todos los recursos que necesites (JS, CSS, HTML, imágenes, audios, etc.)
        globPatterns: ['**/*.{js,css,html,ico,png,svg,mp3}'],
        // Permitimos hasta 50 MiB por fichero (necesario para los MP3)
        maximumFileSizeToCacheInBytes: 50 * 1024 * 1024
      }
    })
  ]
});
