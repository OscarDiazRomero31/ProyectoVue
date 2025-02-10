<script setup>
import { ref, defineEmits } from 'vue';

// Variables reactivas
const searchQuery = ref('');
const emit = defineEmits(['search']);
const isLoading = ref(false);

// Función para buscar en la API de Deezer usando el proxy
const handleSearch = async () => {
  if (!searchQuery.value.trim()) return;

  isLoading.value = true;

  try {
    // Ahora usamos el proxy configurado en Vite
    const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery.value)}`);
    const data = await response.json();

    console.log('Resultados:', data); // Para verificar si llegan datos
    emit('search', data.data || []);
  } catch (error) {
    console.error('Error en la búsqueda:', error);
  } finally {
    isLoading.value = false;
  }
};
</script>
