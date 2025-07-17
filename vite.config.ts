
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Vite configuration optimized for Cloudflare Pages Free Tier and latest Lovable
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Only include componentTagger in development mode and handle ESM import safely
    ...(mode === 'development' ? [
      {
        name: 'lovable-tagger-wrapper',
        async configResolved() {
          if (mode === 'development') {
            try {
              const { componentTagger } = await import('lovable-tagger');
              return componentTagger();
            } catch (error) {
              console.warn('lovable-tagger not available:', error.message);
            }
          }
        }
      }
    ] : [])
  ],
  
  // Path resolution for TypeScript aliases
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/lib": path.resolve(__dirname, "./src/lib"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
  
  // Build optimization for Cloudflare Pages
  build: {
    target: 'es2015',
    minify: 'terser',
    sourcemap: false,
    
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lucide-react']
        }
      }
    },
    
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
    assetsInlineLimit: 4096,
  },
  
  server: {
    host: "::",
    port: 8080,
    open: true
  },
  
  preview: {
    port: 4173,
    host: "::"
  },
  
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
  
  css: {
    devSourcemap: false
  }
}))
