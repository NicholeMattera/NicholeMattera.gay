import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import bookshelfData from './data/bookshelf.json';
import commonData from './data/common.json';
import resumeData from './data/resume.js';
import socialData from './data/social.js';

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
                    template: 'index.html',
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
                        data: {
                            ...commonData,
                            ...bookshelfData
                        },
                        ejsOptions: {
                            views: ['partials']
                        }
                    }
                },
                {
                    entry: 'src/social.js',
                    filename: 'social.html',
                    template: 'social.html',
                    injectOptions: {
                        data: socialData,
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
