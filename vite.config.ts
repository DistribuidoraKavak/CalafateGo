import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 8055,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      ViteImageOptimizer({
        jpg: {
          quality: 80, // Compress JPG to 80% quality
        },
        png: {
          quality: 80, // Compress PNG to 80% quality
        },
        webp: {
          quality: 80,
        },
      }),
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      // Use esbuild for minification (built-in, faster)
      minify: 'esbuild',
      // Split chunks for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            // Separate vendor libraries
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            'vendor-supabase': ['@supabase/supabase-js'],
            'vendor-icons': ['lucide-react'],
          }
        }
      },
      // Generate source maps for debugging (optional)
      sourcemap: false,
      // Chunk size warning limit
      chunkSizeWarningLimit: 500
    }
  };
});
