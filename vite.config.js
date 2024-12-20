import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/components/views/welcome-test-view/index.tsx',
                'resources/js/components/views/react-test-view/index.tsx',
                'resources/js/components/views/random-view/index.tsx',
            ],
            refresh: true,
        }),
        react(),
    ],
});
