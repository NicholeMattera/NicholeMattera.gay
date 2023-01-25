import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
    build: {
        copyPublicDir: true,
        emptyOutDir: true,
        outDir: '../dist'
    },
    plugins: [
        ViteMinifyPlugin({})
    ],
    publicDir: '../public',
    root: 'src'
})
