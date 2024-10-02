/* eslint-disable no-console */
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';



export default defineConfig({
    plugins: [
        svelte()
    ],
    build: {
        sourcemap: true,
        lib: {
            entry: 'src/index.ts',
            name: 'ExpanderCard',   // Name der globalen Variable für UMD/IIFE
            fileName: 'expander-card',  // Basisname der generierten Datei
        }
    },
    rollupOptions: {
        output: {
            entryFileNames: 'expander-card.js' // Dateiname der generierten Haupt-JS-Datei

        }
    }
});

process
    .on('unhandledRejection', (reason, p) => {
        console.error(reason, 'Unhandled Rejection at Promise', p);
        process.exit(1);
    })
    .on('uncaughtException', (err) => {
        console.error(err, 'Uncaught Exception thrown');
        process.exit(1);
    });