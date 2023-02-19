<script setup lang="ts">
import { useAnimejs } from '@productdevbook/animejs-vue'
import { onMounted } from 'vue'

const { anime, array, stagger } = useAnimejs()

onMounted(() => {
  // anime({
  //   targets: '.logo',
  //   rotate: '1turn',
  //   duration: 2000,
  //   easing: 'easeInOutSine',
  //   direction: 'alternate',
  //   loop: true,
  // })
  array.slide({
    target: '.logo',
  })
})

const data = [{
  name: 'Vite',
  id: 'vite',
  data: 'aaa',
},
{
  name: 'Vue',
  id: 'vue',
  data: 'bbb',
},
{
  name: 'Animejs',
  id: 'animejs',
  data: 'ccc',
},
]
</script>

<template>
  <div v-for="item in data" :key="item.id" class="logo">
    <div>
      <h1>{{ item.name }}</h1>
      <p>{{ item.data }}</p>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
