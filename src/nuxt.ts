import { addImportsSources, defineNuxtModule } from '@nuxt/kit'
// Workaround for:
// src/nuxt.ts(5,1): error TS2742: The inferred type of 'default' cannot be named without a reference to '.pnpm/@nuxt+schema@3.0.0_rollup@2.79.0/node_modules/@nuxt/schema'. This is likely not portable. A type annotation is necessary.
import type { } from '@nuxt/schema'

interface Options {}
export default defineNuxtModule({
  setup(_options: Options) {
    addImportsSources({
      from: '@productdevbook/animejs-vue',
      imports: ['useAnimejs'],
    })
  },
})
