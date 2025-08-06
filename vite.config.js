import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import devtoolsJson from 'vite-plugin-devtools-json';

export default defineConfig({
	css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
	plugins: [sveltekit(), devtoolsJson()]
});
