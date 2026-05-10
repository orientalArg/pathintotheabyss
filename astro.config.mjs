import { defineConfig, fontProviders } from 'astro/config';
export default defineConfig({
  // This MUST be inside experimental
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Karantina", // Google Fonts names are usually capitalized
      cssVariable: "--karantina",
      weights: ['300', '400', '500', '700'],
      styles: ['normal'],
    }
  ],
});
