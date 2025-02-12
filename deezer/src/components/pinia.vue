<script setup>
import { createPinia } from 'pinia';
import { provide } from 'vue';

// Creamos la instancia de Pinia
const pinia = createPinia();

// Hacemos que Pinia esté disponible globalmente
provide('pinia', pinia);
</script>

<template>
  <slot />
</template>
