import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/components/welcome-test-page/index.tsx',
                'resources/js/components/react-test-page/index.tsx',
            ],
            refresh: true,
        }),
        react(),
    ],
});
