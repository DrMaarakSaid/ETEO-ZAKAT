import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'ETEO - Zakat & Récoltes',
        short_name: 'ETEO Zakat',
        description: 'Application de calcul de la Zakat agricole et du bétail.',
        theme_color: '#065f46',
        background_color: '#f8fafc',
        display: 'standalone', // Force le mode plein écran (sans la barre d'adresse du navigateur)
        orientation: 'portrait',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  server: {
    open: true // Ouvre le navigateur automatiquement
  }
})