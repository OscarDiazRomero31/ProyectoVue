<template>
    <div v-show="showModal" class="modal-overlay">
      <div class="modal">
        <h2>¡Bienvenido a Deezer Music Client!</h2>
        <p>Introduce tu nombre y elige un avatar para comenzar.</p>
        
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
  
        <button @click="saveUser">Guardar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        selectedAvatar: "",
        showModal: true,
        avatars: [
          "https://i.pravatar.cc/100?img=1",
          "https://i.pravatar.cc/100?img=2",
          "https://i.pravatar.cc/100?img=3",
        ],
      };
    },
    mounted() {
      if (localStorage.getItem("username")) {
        this.showModal = false;
      }
    },
    methods: {
      selectAvatar(avatar) {
        this.selectedAvatar = avatar;
      },
      saveUser() {
        if (this.username.trim() && this.selectedAvatar) {
          console.log("Guardando usuario:", this.username, this.selectedAvatar); // Verificar en consola
          localStorage.setItem("username", this.username);
          localStorage.setItem("avatar", this.selectedAvatar);
          this.showModal = false;
          this.$emit("user-registered");
        } else {
          alert("Por favor, ingresa un nombre y selecciona un avatar.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    width: 300px;
  }
  
  .avatar-selection img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    margin: 5px;
  }
  
  .avatar-selection .selected {
    border: 3px solid blue;
  }
  
  button {
    margin-top: 10px;
    padding: 8px 15px;
    border: none;
    background: blue;
    color: white;
    cursor: pointer;
    border-radius: 5px;
  }
  </style>
  