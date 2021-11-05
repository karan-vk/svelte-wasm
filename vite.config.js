import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { ViteRsw } from 'vite-plugin-rsw';

export default defineConfig({
  plugins: [
    svelte(),
    ViteRsw({
      crates: [
        'inc',
      ]
    }),
  ],
})
