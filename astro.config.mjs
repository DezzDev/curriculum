import { defineConfig } from 'astro/config';


const isProd = import.meta.env.PROD;
// const isDev = import.meta.env.DEV;
let config = {}

if (isProd){
	config = {
		site : "https://DezzDev.github.io",
		base: "/curriculum"
	}
}


	// https://astro.build/config
	export default defineConfig(config);


