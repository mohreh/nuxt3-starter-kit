import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@formkit/nuxt'],
  buildModules: ['@vueuse/nuxt'],
  build: {
    transpile: [
      // '@heroicons/vue' // uncomment if you are using heroicons
    ],
  },
});
