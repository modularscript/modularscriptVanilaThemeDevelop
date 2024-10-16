import { defineConfig } from 'vite'
import sass from 'sass'

export default defineConfig({
	silenceDeprecations: ['legacy-js-api'],
	css: {
		preprocessorOptions: {
			scss: {
				implementation: sass
			}
		}
	}
})
