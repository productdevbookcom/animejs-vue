<script setup lang="ts">
import { useAnimejs } from '@productdevbook/animejs-vue'
import { onMounted, ref } from 'vue'

const { anime, animations, helper } = useAnimejs()

onMounted(() => {
  // anime({
  //   targets: '.logo',
  //   rotate: '1turn',
  //   duration: 2000,
  //   easing: 'easeInOutSine',
  //   direction: 'alternate',
  //   loop: true,
  // })
  animations.array.fade({
    target: '.logo',
    params: {
      delay: helper.stagger(500),
    },
  })
})

const data = ref([{
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
])

const addList = () => {
  data.value.push({
    name: 'Vite',
    id: 'vite',
    data: 'aaa',
  })
}
</script>

<template>
  <div class="flex items-center justify-center h-screen w-screen flex-col">
    <div class="mb-10">
      <button @click="addList">
        Add List
      </button>
    </div>
    <div class="grid grid-cols-1 gap-6">
      <div v-for="item in data" :key="item.id" class="logo">
        <div class="font-bold">
          <h1>{{ item.name }}</h1>
          <p>{{ item.data }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
