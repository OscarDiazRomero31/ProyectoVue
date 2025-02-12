<script setup>
import { RouterView } from 'vue-router';
import Menu from './components/menu.vue';
</script>

<template>
  <div id="app">
    <Menu />
    <RouterView />
  </div>
</template>
