<p>
      <a href="https://www.npmjs.com/package/@productdevbook/animejs-vue"><img src="https://img.shields.io/npm/v/@productdevbook/animejs-vue.svg?style=flat&colorA=002438&colorB=28CF8D" alt="Version"></a>
      <a href="https://www.npmjs.com/package/@productdevbook/animejs-vue"><img src="https://img.shields.io/npm/dm/@productdevbook/animejs-vue.svg?style=flat&colorA=002438&colorB=28CF8D" alt="Downloads"></a>
      <a href="./LICENSE"><img src="https://img.shields.io/github/license/productdevbook/storage.svg?style=flat&colorA=002438&colorB=28CF8D" alt="License"></a>
      <a href="https://github.com/productdevbook/animejs-vue">
      <img src="https://img.shields.io/github/stars/productdevbook/animejs-vue.svg?style=social&label=Star&maxAge=2592000" alt="Github Stars"> </a>
</p>

[Anime.js](https://animejs.com/) It is a wrapper package for Vue.js.

### Setup
```bash
pnpm install @productdevbook/animejs-vue
```

## Usage

### Vue 3 or TypeScript
```ts
import { anime } from '@productdevbook/animejs'

anime({
  targets: '.demo .el',
  translateX: 250,
  rotate: '1turn',
  backgroundColor: '#FFF',
  duration: 800
})
```

### Nuxt 3
nuxt.config.ts
```ts
defineNuxtConfig({
  modules: [
    '@productdevbook/animejs-vue/nuxt'
  ]
})
```

## Local Development


### Requirements

- [Node.js](https://nodejs.org/en/) 18.0.0+
- [pnpm](https://pnpm.io/) 7.26.3+


### Setup
```bash
pnpm install
```

### Dev
```bash
pnpm dev
```

### Build
```bash
pnpm build
```


# Linkler

- [Web Sitesi](https://productdevbook.com)
- [Discord](https://discord.productdevbook.com)
- [Twitter](https://twitter.com/productdevbookcom)
