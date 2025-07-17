
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Latest Lovable Vite configuration with enhanced optimizations
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Enhanced component tagger for latest Lovable features
    ...(mode === 'development' ? [
      {
        name: 'lovable-tagger-enhanced',
        async configResolved() {
          if (mode === 'development') {
            try {
              const { componentTagger } = await import('lovable-tagger');
              return componentTagger({
                // Enhanced tagging for better debugging
                tagAllComponents: true,
                includeProps: true,
                includeState: true
              });
            } catch (error) {
              console.warn('lovable-tagger not available:', error.message);
            }
          }
        }
      }
    ] : [])
  ],
  
  // Enhanced path resolution with latest aliases
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/lib": path.resolve(__dirname, "./src/lib"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/types": path.resolve(__dirname, "./src/types"),
      "@/integrations": path.resolve(__dirname, "./src/integrations"),
    },
  },
  
  // Latest build optimizations for enhanced performance
  build: {
    target: 'es2020', // Updated target for better modern browser support
    minify: 'terser',
    sourcemap: false,
    
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-toast', '@radix-ui/react-tabs'],
          utils: ['lucide-react', 'clsx', 'tailwind-merge'],
          supabase: ['@supabase/supabase-js']
        }
      }
    },
    
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
    assetsInlineLimit: 4096,
    
    // Enhanced CSS optimization
    cssCodeSplit: true,
    cssMinify: true,
  },
  
  // Enhanced development server configuration
  server: {
    host: "::",
    port: 8080,
    open: true,
    cors: true,
    // Enhanced HMR for better development experience
    hmr: {
      overlay: true,
      clientPort: 8080
    }
  },
  
  preview: {
    port: 4173,
    host: "::",
    cors: true
  },
  
  // Latest esbuild optimizations
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    legalComments: 'none',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
  
  // Enhanced CSS processing
  css: {
    devSourcemap: false,
    postcss: {
      plugins: []
    }
  },
  
  // Latest optimizations for better performance
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@radix-ui/react-dialog',
      '@radix-ui/react-toast',
      'lucide-react'
    ],
    exclude: ['@supabase/supabase-js']
  },
  
  // Enhanced define for environment variables
  define: {
    __DEV__: mode === 'development',
    __PROD__: mode === 'production'
  }
}))
