import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import bookshelfData from './data/bookshelf.js';
import resumeData from './data/resume.js';

export default defineConfig({
    build: {
        copyPublicDir: true,
        emptyOutDir: true
    },
    plugins: [
        createHtmlPlugin({
            minify: true,
            pages: [
                {
                    entry: 'src/resume.js',
                    filename: 'index.html',
                    template: 'resume.html',
                    injectOptions: {
                        data: resumeData,
                        ejsOptions: {
                            views: ['partials']
                        }
                    }
                },
                {
                    entry: 'src/bookshelf.js',
                    filename: 'bookshelf.html',
                    template: 'bookshelf.html',
                    injectOptions: {
                        data: bookshelfData,
                        ejsOptions: {
                            views: ['partials']
                        }
                    }
                }
            ]
        })
    ],
    publicDir: 'public'
})
