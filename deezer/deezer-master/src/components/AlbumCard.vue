<template>
  <div class="album-card">
    <img :src="album.cover_medium" alt="Carátula" />
    <h4>{{ album.title }}</h4>
    <p>{{ album.artist.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    album: Object,
  },
};
</script>

<style scoped>
.album-card {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  width: 200px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.album-card img {
  width: 100%;
  border-radius: 5px;
}
</style>
