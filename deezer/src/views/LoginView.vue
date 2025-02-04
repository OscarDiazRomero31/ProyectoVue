<template>
    <div class="login-container">
      <h2>Iniciar Sesión</h2>
      <p>Introduce tu nombre y selecciona un avatar para continuar.</p>
  
      <input v-model="username" type="text" placeholder="Tu nombre" />
  
      <div class="avatar-selection">
        <img
          v-for="(avatar, index) in avatars"
          :key="index"
          :src="avatar"
          :class="{ selected: selectedAvatar === avatar }"
          @click="selectAvatar(avatar)"
          alt="Avatar"
        />
      </div>
  
      <button @click="loginUser">Entrar</button>
    </div>
  </template>
  
  <script>
  import { useRouter } from "vue-router";
  import { ref } from "vue";
  
  export default {
    setup() {
      const router = useRouter();
      const username = ref("");
      const selectedAvatar = ref("");
  
      const avatars = [
        "https://i.pravatar.cc/100?img=1",
        "https://i.pravatar.cc/100?img=2",
        "https://i.pravatar.cc/100?img=3",
      ];
  
      const selectAvatar = (avatar) => {
        selectedAvatar.value = avatar;
      };
  
      const loginUser = () => {
        if (username.value.trim() && selectedAvatar.value) {
          localStorage.setItem("username", username.value);
          localStorage.setItem("avatar", selectedAvatar.value);
          router.push("/home");
        } else {
          alert("Por favor, introduce un nombre y selecciona un avatar.");
        }
      };
  
      return { username, selectedAvatar, avatars, selectAvatar, loginUser };
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: auto;
    text-align: center;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .avatar-selection {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 15px 0;
  }
  
  .avatar-selection img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid transparent;
  }
  
  .avatar-selection .selected {
    border-color: blue;
  }
  
  button {
    background: blue;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    width: 100%;
  }
  </style>
  