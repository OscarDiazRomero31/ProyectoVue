<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div id="app">
    <!-- Header -->
    <header class="bg-primary text-white py-3">
      <div class="container text-center">
        <h1>Deezer Music Client</h1>
      </div>
    </header>
    
    <!-- Navbar -->
    <nav class="navbar">
      <div class="user-info">
        <img v-if="user.avatar" :src="user.avatar" alt="Avatar" class="avatar" />
        <span v-if="user.name">{{ user.name }}</span>
      </div>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/playlists">Playlists</router-link></li>
        <li><router-link to="/search">Buscador</router-link></li>
      </ul>
      <button @click="logout">Logout</button>
    </nav>

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

<script>
export default {
  data() {
    return {
      user: {
        name: localStorage.getItem("username") || "Invitado",
        avatar: localStorage.getItem("avatar") || "",
      },
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("avatar");
      this.user.name = "Invitado";
      this.user.avatar = "";
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #282c34;
  padding: 10px 20px;
  color: white;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 15px;
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
