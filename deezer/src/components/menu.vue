<script setup>
import { ref, onMounted, defineEmits } from 'vue';

// Emitir evento para cerrar sesión
const emit = defineEmits(['logout']);

// Estado del usuario
const user = ref({ name: 'Invitado', avatar: 'https://via.placeholder.com/40' });

// Cargar el usuario guardado
onMounted(() => {
  const savedUser = localStorage.getItem('user');
  if (savedUser) {
    user.value = JSON.parse(savedUser);
  }
});
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      🎵 Deezer Music Client
    </div>
    <ul class="nav-links">
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/playlists">Playlists</router-link></li>
      <li><router-link to="/search">Buscador</router-link></li>
    </ul>
    <div class="user-info">
      <img :src="user.avatar" alt="Avatar" class="avatar" />
      <span>{{ user.name }}</span>
      <button @click="emit('logout')">Logout</button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #282c34;
  color: white;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
