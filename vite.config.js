import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',

      pwaAssets: {
        preset: 'minimal-2023',
      },

      manifest: {
        name: 'ChatBot PWA',
        short_name: 'ChatBot',
        description: 'My experimental chatbot as a PWA',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
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

      // This makes it work perfectly with ngrok or any dev server
      devOptions: {
        enabled: true   // ← super important for local testing!
      }
    })
  ],
  server: {
    port:3500,
    host: '0.0.0.0',
    allowedHosts: ['superaffluently-unbartered-arlie.ngrok-free.dev']
  }
})
