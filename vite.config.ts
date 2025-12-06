import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@domain': path.resolve(__dirname, 'src/domain'),
			'@use-cases': path.resolve(__dirname, 'src/use-cases'),
			'@controllers': path.resolve(__dirname, 'src/controllers'),
			'@presentation': path.resolve(__dirname, 'src/presentation'),
			'@lib': path.resolve(__dirname, 'src/lib')
		}
	}
});
