import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

const buildPath = process.env.VITE_BUILD_PATH || 'dist'

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: buildPath, // <- указываем кастомную папку для билда
        emptyOutDir: true, // очищает папку перед билдом
    },
})
