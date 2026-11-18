import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

site: 'https://www.moncorpslibere.fr'

// Site 100% statique : toutes les pages sont générées au build,
// plus de fonction serverless ni d'appel réseau au moment de l'affichage.
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
});
