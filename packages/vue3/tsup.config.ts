import { defineConfig } from 'tsup'

export default defineConfig({
  globalName: 'FullEventCalsendar',
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  clean: true
})
