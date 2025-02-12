<script setup>
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import Menu from './components/menu.vue';
import WelcomeModal from './components/WelcomeModal.vue';

// Estado para manejar si el usuario está registrado
const userRegistered = ref(false);

// Función para verificar si hay un usuario en localStorage
const checkUser = () => {
  const savedUser = localStorage.getItem('user');
  userRegistered.value = !!savedUser; // Si hay usuario, es true; si no, false
};

// Función para cerrar sesión
const logout = () => {
  localStorage.removeItem('user'); // Elimina usuario
  userRegistered.value = false; // Vuelve a mostrar el modal
};

// Escuchamos cuando el componente se monta
onMounted(() => {
  checkUser();
});
</script>

<template>
  <div id="app">
    <!-- Modal de bienvenida (se muestra solo si no hay usuario) -->
    <WelcomeModal v-if="!userRegistered" @update="checkUser" />

    <!-- Contenido de la aplicación (solo visible si el usuario está registrado) -->
    <template v-if="userRegistered">
      <Menu @logout="logout" />
      <RouterView />
    </template>
  </div>
</template>
