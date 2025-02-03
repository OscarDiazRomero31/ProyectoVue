<template>
  <div class="artist-card">
    <img :src="artist.picture_medium" alt="Foto del artista" />
    <h4>{{ artist.name }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    artist: Object,
  },
};
</script>

<style scoped>
.artist-card {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  width: 200px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.artist-card img {
  width: 100%;
  border-radius: 5px;
}
</style>
