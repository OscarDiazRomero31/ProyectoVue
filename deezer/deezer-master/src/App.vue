<script setup>
import { ref, onMounted } from "vue";
import { RouterView } from 'vue-router';
import Navbar from "@/components/Navbar.vue";
import WelcomeModal from "@/components/WelcomeModal.vue";

const showWelcomeModal = ref(false);

onMounted(() => {
  if (!localStorage.getItem("username")) {
    showWelcomeModal.value = true;
  }
});

const checkUser = () => {
  showWelcomeModal.value = false;
};
</script>

<template>
  <div id="app">
    <!-- Header -->
    <header class="bg-primary text-white py-3">
      <div class="container text-center">
        <h1>Deezer Music Client</h1>
      </div>
    </header>

    <!-- Welcome Modal -->
    <WelcomeModal v-show="showWelcomeModal" @user-registered="checkUser" />
    
    <!-- Navbar -->
    <Navbar v-if="!showWelcomeModal" />

    <!-- Main Content -->
    <main class="container my-4">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3">
      <p>&copy; 2024 Deezer Music Client. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<style lang="scss">
nav {
  border: 1px solid gray;
}

$hover-bg-color: #007bff;
$hover-text-color: #ffffff;

li {
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: $hover-bg-color;
    color: $hover-text-color;
    font-weight: bold;
  }
}
</style>