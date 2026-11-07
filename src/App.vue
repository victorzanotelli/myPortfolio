<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <!-- Change de « monde » (portail, Zalem, Brave New World) avec un fondu -->
  <RouterView v-slot="{ Component }">
    <Transition name="world" mode="out-in">
      <component :is="Component" :key="route.matched[0]?.path" />
    </Transition>
  </RouterView>
</template>
