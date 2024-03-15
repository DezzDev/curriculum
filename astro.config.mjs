import { defineConfig } from 'astro/config';


const isProd = import.meta.env.PROD;
// const isDev = import.meta.env.DEV;
const config = {}

if (isProd){
	config = {
		site : "https://thedezz360.github.io",
		base: "/portfolio-minimalista"
	}
}


	// https://astro.build/config
	export default defineConfig(config);


