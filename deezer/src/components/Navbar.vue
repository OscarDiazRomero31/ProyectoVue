<template>
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
  