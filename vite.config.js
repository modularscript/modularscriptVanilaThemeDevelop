import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(__dirname, './')
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				// If you have a variables file, uncomment and adjust the path:
				// additionalData: `@use "@/_sass/variables.scss" as *;`
				silenceDeprecations: ["legacy-js-api"],
				api: 'modern-compiler'
			}
		}
	},
	build: {
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true
			}
		},
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html')
			}
		}
	},
	server: {
		port: 5500,
		open: true
	}
})
