
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { componentTagger } from "lovable-tagger";

// Vite configuration optimized for Cloudflare Pages Free Tier and latest Lovable
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  
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
    // Optimize for Cloudflare Pages build limits
    target: 'es2015',
    minify: 'terser',
    sourcemap: false, // Disable sourcemaps to reduce build time
    
    // Optimize bundle splitting for faster loads
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lucide-react']
        }
      }
    },
    
    // Reduce bundle size
    chunkSizeWarningLimit: 1000,
    
    // Enable build optimizations
    reportCompressedSize: false, // Faster builds
    assetsInlineLimit: 4096, // Inline small assets
  },
  
  // Development server optimization
  server: {
    host: "::",
    port: 8080,
    open: true
  },
  
  // Preview server for testing builds
  preview: {
    port: 4173,
    host: "::"
  },
  
  // Performance optimizations
  esbuild: {
    // Remove console logs in production
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
  
  // CSS optimization
  css: {
    devSourcemap: false // Faster builds
  }
}))
