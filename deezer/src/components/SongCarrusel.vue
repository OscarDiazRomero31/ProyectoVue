<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
      <!-- Indicadores del carrusel -->
      <div class="carousel-indicators">
        <button
          v-for="(cancion, index) in canciones"
          :key="index"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
        ></button>
      </div>
  
      <!-- Imágenes y detalles del carrusel -->
      <div class="carousel-inner">
        <div v-for="(cancion, index) in canciones" :key="index" :class="['carousel-item', { active: index === 0 }]">
          <img :src="cancion.album.cover_xl" class="d-block w-100 carousel-img" alt="Carátula del álbum" />
          <div class="carousel-overlay">
            <h2 class="song-title">{{ cancion.title }}</h2>
            <p class="album-title">Álbum: {{ cancion.album.title }}</p>
            <p class="artist-name">Artista: {{ cancion.artist.name }}</p>
            <audio controls>
              <source :src="cancion.preview" type="audio/mpeg">
              Tu navegador no soporta el audio.
            </audio>
          </div>
        </div>
      </div>
  
      <!-- Controles del carrusel -->
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { onBeforeRouteUpdate } from 'vue-router';
  
  const canciones = ref([]);
  
  // Obtener las canciones más escuchadas desde Deezer usando el proxy local
  const obtenerTopCanciones = async () => {
    try {
      const response = await fetch('http://localhost:8080/https://api.deezer.com/chart/0/tracks');
      const data = await response.json();
      canciones.value = data.data; // Guardamos solo las canciones más escuchadas
    } catch (error) {
      console.error('Error obteniendo canciones más escuchadas:', error);
    }
  };
  
  // Cargar las canciones al montar el componente
  onMounted(obtenerTopCanciones);
  
  // Recargar las canciones cuando la ruta cambie (cuando el usuario regrese a Inicio)
  onBeforeRouteUpdate(() => {
    obtenerTopCanciones();
  });
  </script>
  
  <style scoped>
  /* Ocupa toda la pantalla */
  #carouselExampleIndicators {
    width: 100%;
    height: 100vh;
    position: relative;
  }
  
  /* Imágenes del carrusel */
  .carousel-img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  
  /* Capa de superposición */
  .carousel-overlay {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.7);
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    color: white;
    width: 60%;
  }
  
  /* Texto en la superposición */
  .song-title {
    font-size: 2rem;
    font-weight: bold;
  }
  
  .album-title, .artist-name {
    font-size: 1.2rem;
    margin: 5px 0;
  }
  
  /* Estilos de los indicadores */
  .carousel-indicators button {
    background-color: white;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
  }
  
  /* Estilos de los controles */
  .carousel-control-prev, .carousel-control-next {
    filter: invert(1);
  }
  </style>
  