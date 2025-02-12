<script setup>
import { ref, onMounted, defineEmits } from 'vue';

// Emitir evento al padre cuando el usuario se registre
const emit = defineEmits(['update']);

const showModal = ref(true);
const userName = ref('');
const selectedAvatar = ref('https://via.placeholder.com/80');

// Lista de avatares opcionales
const avatars = [
  'https://via.placeholder.com/80',
  'https://i.pravatar.cc/80?img=1',
  'https://i.pravatar.cc/80?img=2',
  'https://i.pravatar.cc/80?img=3'
];

// Función para seleccionar un avatar
const chooseAvatar = (avatar) => {
  selectedAvatar.value = avatar;
};

// Función para guardar datos y cerrar el modal
const saveUser = () => {
  if (userName.value.trim() !== '') {
    const user = { name: userName.value, avatar: selectedAvatar.value };
    localStorage.setItem('user', JSON.stringify(user));
    emit('update'); // 🔥 Se emite el evento para actualizar el estado en App.vue
  }
};

// Verificar si ya hay un usuario en localStorage
onMounted(() => {
  const savedUser = localStorage.getItem('user');
  if (savedUser) {
    emit('update'); // Si hay usuario, se oculta el modal automáticamente
  }
});
</script>

<template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <h2>¡Bienvenido!</h2>
      <p>Ingresa tu nombre y elige un avatar para empezar.</p>

      <input v-model="userName" type="text" placeholder="Tu nombre" />

      <div class="avatar-selection">
        <p>Elige un avatar:</p>
        <div class="avatars">
          <img v-for="avatar in avatars" :key="avatar" :src="avatar" 
               @click="chooseAvatar(avatar)" 
               :class="{ selected: selectedAvatar === avatar }"/>
        </div>
      </div>

      <button @click="saveUser">Guardar</button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  width: 300px;
}

.avatars {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.avatars img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid transparent;
}

.avatars img.selected {
  border-color: blue;
}

button {
  margin-top: 10px;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
