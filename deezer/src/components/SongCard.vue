<template>
  <div class="song-card">
    <img :src="song.album.cover_medium" alt="Carátula" />
    <h4>{{ song.title }}</h4>
    <p>{{ song.artist.name }}</p>
    <audio :src="song.preview" controls></audio>
  </div>
</template>

<script>
export default {
  props: {
    song: Object,
  },
};
</script>

<style scoped>
.song-card {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  width: 200px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.song-card img {
  width: 100%;
  border-radius: 5px;
}
</style>
