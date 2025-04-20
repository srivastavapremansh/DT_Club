import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.jpeg', '**/*.png'],
  optimizeDeps: {
    include: [
      'swiper',
      'swiper/react',
      'react-masonry-css'
    ]
  }
})
